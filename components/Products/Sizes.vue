<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: []
  },
});

const currentSize = ref(null);
const emit = defineEmits([
  "updateSize",
  "updatePrice",
  "updateOldprice",
]);


function colorNPriceSection(size, price, oldPrice) {
  currentSize.value = size
  
  emit("updateSize", size);
  emit("updatePrice", price);
  emit("updateOldprice", oldPrice);

}


onMounted(() => {
  if (props.data.length > 0) {
    colorNPriceSection(props.data[0]['size'], props.data[0]['price'], props.data[0]['oldPrice'])
  }
})
</script>

<template>
  <div>
    <p class="text-darkGrey font-medium text-lg capitalize">Wrist Sizes</p>
    
    <section class="flex items-center gap-2 pt-2">
      <div
        v-for="size in data"
        :class="[
          currentSize === size['size'] ? 'border-lightIndigo' : '',
          'flex items-center gap-2 border p-2 px-4 rounded-md cursor-pointer',
        ]"
        @click="colorNPriceSection(size['size'], size['price'], size['oldPrice'])"
      >
        <span class=" font-bold" :class="currentSize === size['size'] ? 'text-lightIndigo' : 'text-darkGrey'">{{ size.size }}</span>
        <span class="text-sm text-lightGrey">${{ size.price }}</span>
      </div>
    </section>
  </div>
</template>
