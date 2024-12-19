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
      if (image["color"] === props.currentColor) {
        emit("update:modelValue", image["imgSrc"]);
      }
    });
  }
);
</script>

<template>
  <main
    class="h-full w-full rounded-md h-[50vh] md:w-[90vw] md:h-[65vh] lg:w-[600px] lg:h-[700px] m-auto overflow-hidden"
  >
    <template v-for="image in images" :key="image['color']">
      <transition name="slide-fade">
        <img
          v-if="image['color'] === currentColor"
          :src="image['imgSrc']"
          alt=""
          class="object-cover h-full w-full"
        />
      </transition>
    </template>

    <!-- {{ images }} -->
  </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0);
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
}
</style>
