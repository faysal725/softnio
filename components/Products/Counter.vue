<script setup>


import {
    MinusIcon,
  PlusIcon
} from "@heroicons/vue/24/outline";

const noOfItem = ref(1)
const emit = defineEmits(["update:modelValue"]);


function increment() {
    noOfItem.value++
    emit("update:modelValue", noOfItem.value);
}
function decrement() {
    noOfItem.value > 1 ? noOfItem.value-- : 1
    emit("update:modelValue", noOfItem.value);
}
</script>

<template>
    <main class="rounded-md border border-gray-300 flex h-full items-center max-w-36">
        <div class="border-0 border-r border-gray-300 h-full flex items-center px-2 cursor-pointer" @click="decrement">
            <MinusIcon class="h-4 w-4 text-lightGrey" />
        </div>
        <div class="h-full w-14 flex justify-center items-center text-base text-darkGrey font-semibold">
            {{ noOfItem }}
        </div>
        
        <div class="border-0 border-l border-gray-300 h-full flex items-center px-2 cursor-pointer" @click="increment">
            <PlusIcon class="h-4 w-4 text-lightGrey " />
        </div>
    </main>
</template>