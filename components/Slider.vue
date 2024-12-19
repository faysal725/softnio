<script setup>
import { MinusIcon, PlusIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  images: {
    type: Array,
    default: [],
  },
  currentColor: String,
});

const emit = defineEmits(["update:modelValue"]);


watch(
  () => props.currentColor,
  () => {
    props.images.map((image, index) => {
      if (image['color'] === props.currentColor) {
        emit("update:modelValue", image['imgSrc']);
      }
    })
    // emit("updateInput", searchInput.value);
  }
);
</script>

<template>
  <main class="h-full w-full rounded-md overflow-hidden">
    <template v-for="image in images">
      <img
        v-if="image['color'] === currentColor"
        :src="image['imgSrc']"
        alt=""
        class="object-cover h-full w-full"
      />
    </template>

    <!-- {{ images }} -->
  </main>
</template>
