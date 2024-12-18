<script setup>
const props = defineProps({
    rating: {
    type: Number,
    default: 0
  },
  totalStar: {
    type: Number,
    default: 0
  },
});

</script>


<template>
    <div class="flex items-center gap-1">
        <img v-for="star in [0, 1, 2, 3, 4]" src="/star/full.png" alt="">
    </div>
</template>