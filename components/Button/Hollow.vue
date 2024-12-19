<script setup>
const props = defineProps({
  name: String,
  classes: {
    default: "",
    type: String,
  },
});
</script>

<template>
  <button
    class="text-xs p-2.5  border border-lightGrey text-darkGrey rounded-sm  px-4 bg-white font-semibold"
    :class="classes"
  >
    {{ name }}
  </button>
</template>
