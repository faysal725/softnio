<script setup>
import { useCartStore } from "~~/stores/cartStore";
import { HeartIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  data: Object,
});

// stores
const cartStore = useCartStore();
const { setProduct, calculateTotalPriceNProduct } = cartStore;

let colors = ref([]);
let sizes = ref([]);
let images = ref([]);

const form = ref({
  name: props.data.name,
  imgSrc: "",
  noOfItem: 1,
  color: "",
  size: "",
  price: "",
  oldPrice: "",
});

function extractColorsAndSizes() {
  props.data.attributes.map((attr, index) => {
    let isColorExists = colors.value.includes(attr["color"]);

    let isSizeExists = sizes.value.some(
      (size) => size["size"] === attr["size"]
    );

    if (!isColorExists) {
      colors.value.push(attr["color"]);
      images.value.push({ color: attr["color"], imgSrc: attr["imgUrl"] });
    }
    if (!isSizeExists) {
      sizes.value.push({
        size: attr["size"],
        price: attr["discountedPrice"],
        oldPrice: attr["salePrice"],
      });
    }
  });
}

function addProductToStore() {
  let productData = {
    name: form.value.name,
    imgSrc: form.value.imgSrc,
    noOfItem: form.value.noOfItem,
    color: form.value.color,
    size: form.value.size,
    price: form.value.price,
    oldPrice: form.value.oldPrice,
    variationCode: form.value.color + "-" + form.value.size,
  };

  setProduct(productData);
  calculateTotalPriceNProduct();
}

extractColorsAndSizes();
</script>

<template>
  <div class="grid grid-cols-12 mt-4 gap-8 lg:gap-14 px-10 lg:px-0">
    <!-- details  -->
    <section class="col-span-12 lg:col-span-6">
      <!-- <img src="/watch/blue.png" alt="" class="object-cover h-full w-full"/> -->
      <Slider
        :images="images"
        :currentColor="form.color"
        v-model="form.imgSrc"
      />
    </section>
    <section
      class="col-span-12 lg:col-span-6 flex flex-col justify-center gap-6"
    >
      <div class="space-y-3">
        <h1 class="text-2xl lg:text-4xl font-bold text-darkGrey">
          {{ props.data.name }}
        </h1>

        <ProductsRating
          :rating="props.data.rating"
          :noOfPeople="props.data.peopleGaveReview"
        />
      </div>

      <div class="flex gap-2 items-center">
        <span class="text-3xl font-normal text-lightGrey">
          <strike>${{ form.oldPrice ? form.oldPrice : "00" }}</strike>
        </span>
        <span class="text-3xl font-semibold text-lightIndigo"
          >${{ form.price ? form.price : "00" }}</span
        >
      </div>

      <!-- description  -->
      <div>
        <p class="text-lg lg:text-xl leading-9 text-darkGrey">
          {{ props.data.description }}
        </p>
      </div>

      <!-- type  -->
      <div class="flex items-center gap-10">
        <div>
          <p class="text-base text-lightGrey">Type</p>
          <p class="text-base text-darkGrey font-medium">
            {{ props.data.type }}
          </p>
        </div>
        <div>
          <p class="text-base text-lightGrey">Model Number</p>
          <p class="text-base text-darkGrey font-medium">
            {{ props.data.modelNo }}
          </p>
        </div>
      </div>

      <!-- attributes section-->
      <ProductsColors v-model="form.color" :data="colors" />
      <ProductsSizes
        :data="sizes"
        @update-size="(size) => (form.size = size)"
        @update-price="(price) => (form.price = price)"
        @update-oldprice="(oldPrice) => (form.oldPrice = oldPrice)"
      />

      <section class="flex items-center space-x-4">
        <ProductsCounter v-model="form.noOfItem" />

        <ButtonMd @click="addProductToStore" name="Add to Cart" />

        <HeartIcon class="h-6 w-6 text-lightIndigo cursor-pointer" />
      </section>
    </section>
  </div>
</template>
