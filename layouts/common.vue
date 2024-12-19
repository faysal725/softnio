<script setup>
import { useCartStore } from "~~/stores/cartStore";

// stores
const cartStore = useCartStore();
const { getProducts } = cartStore;

const openModal = ref(false);
</script>

<template>
  <main class="relative">
    <div class="max-w-7xl min-h-screen mx-auto">
      <slot />
    </div>

    <!-- checkout btn  -->
    <button
      class="text-xs font-bold text-darkGrey bg-darkYellow px-4 p-2 rounded-full fixed bottom-10 right-[50%] flex items-center justify-center gap-2 transition-all duration-200"
      :class="
        cartStore.products.length >= 1 ? 'translate-y-0' : 'translate-y-96'
      "
      @click="openModal = true"
    >
      Checkout
      <span class="bg-white px-1.5">{{
        cartStore.products.length >= 1 ? cartStore.totalNoOfProducts : "0"
      }}</span>
    </button>

    <!-- modal  -->

    <ModalContainer
      :shouldOpen="openModal"
      @update-input="(bool) => (openModal = false)"
      classes="bg-white w-full  "
      :showCloseBtn="true"
    >
      <div class="bg-white min-w-32 p-4 z-20 rounded-lg">
        <Table title="Your Cart" :productData="cartStore.products" :totalPrice="cartStore.total" :totalItem="cartStore.totalNoOfProducts"/>
      </div>
    </ModalContainer>
  </main>
</template>
