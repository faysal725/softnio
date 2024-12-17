<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: []
  },
});


const currentColor = ref(null)




</script>

<template>
  <div>
    <p class="text-darkGrey font-medium text-lg capitalize">Band Colors</p>

    <section class="flex items-center gap-2 pt-2">
      <div
        v-for="color in data"
        :class="`border border-2  w-fit rounded-full cursor-pointer `"
        :style="`border-color: ${currentColor == color && color  }`"
        @click="currentColor = color"
      >
        <div
          :class="` h-4 w-4 rounded-full border border-2 p-2 border-white`"
          :style="`background-color: ${color}`"
        ></div>
      </div>
    </section>
  </div>
</template>
