<script setup>
const props = defineProps({
  data: Object,
});

let colors = ref([]);
let sizes = ref([]);

function extractColorsAndSizes() {
  props.data.attributes.map((attr, index) => {
    let isColorExists = colors.value.includes(attr["color"]);
    let isSizeExists = sizes.value.includes(attr["size"]);

    if (!isColorExists) {
      colors.value.push(attr["color"]);
    }
    if (!isSizeExists) {
        sizes.value.push(attr["size"]);
    }
  });
}


extractColorsAndSizes();
</script>

<template>
  <div class="grid grid-cols-12 mt-4 gap-14">
    <!-- details  -->
    <section class="col-span-12 lg:col-span-6">
      <img src="/watch/blue.png" alt="" />
    </section>
    <section
      class="col-span-12 lg:col-span-6 flex flex-col justify-center gap-6"
    >
      <h1 class="text-4xl font-bold text-darkGrey">{{ props.data.name }}</h1>

      <div class="flex gap-2 items-center">
        <span class="text-3xl font-normal text-lightGrey">
          <strike>$12</strike>
        </span>
        <span class="text-3xl font-semibold text-lightIndigo">$12</span>
      </div>

      <!-- description  -->
      <div>
        <p class="text-xl leading-9 text-darkGrey">
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
      <ProductsColors :data="colors"/>
    </section>
  </div>
</template>
