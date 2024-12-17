<script setup>
const props = defineProps({
  data: Array,
});
</script>

<template>
  <div>
    <p class="text-darkGrey font-medium text-lg capitalize">Wrist Sizes</p>

    <section class="flex items-center gap-2 pt-2">
      <div
        v-for="size in data"
        class="flex items-center gap-2 border border-lightIndigo p-2 px-4 rounded-md cursor-pointer"
      >
       <span class="text-lightIndigo font-bold">{{ size.size }}</span>
       <span class="text-sm text-lightGrey">${{ size.price }}</span> 
      </div>
    </section>
  </div>
</template>
