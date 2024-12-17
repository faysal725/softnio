<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: []
  },
});

const currentSize = ref(null);
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
        @click="currentSize = size['size']"
      >
        <span class="text-lightIndigo font-bold">{{ size.size }}</span>
        <span class="text-sm text-lightGrey">${{ size.price }}</span>
      </div>
    </section>
  </div>
</template>
