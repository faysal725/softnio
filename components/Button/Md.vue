<script setup>
const props = defineProps({
  name: String,
  classes: {
    default:
      "",
    type: String,
  },
});
</script>

<template>
  <button class="text-xs p-2.5 bg-lightIndigo rounded-sm text-white px-4"     :class="classes">
    {{ name }}
  </button>
</template>
