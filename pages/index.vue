<script setup>
import { XMarkIcon, PlusIcon } from "@heroicons/vue/24/outline";

definePageMeta({
  layout: "common",
});

const products = [
  {
    name: "Classy Modern Smart watch",
    description:
      "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
    rating: 4.5,
    type: "Watch",
    modelNo: "Forerunner 290XT",
    peopleGaveReview: 2,
    attributes: [
      {
        color: "#816BFF",
        size: "S",
        salePrice: 99,
        discountedPrice: 69,
        imgUrl: "/watch/purple.png",
      },
      {
        color: "#816BFF",
        size: "M",
        salePrice: 99,
        discountedPrice: 79,
        imgUrl: "/watch/purple.png",
      },
      {
        color: "#816BFF",
        size: "L",
        salePrice: 99,
        discountedPrice: 89,
        imgUrl: "/watch/purple.png",
      },
      {
        color: "#816BFF",
        size: "XL",
        salePrice: 110,
        discountedPrice: 99,
        imgUrl: "/watch/purple.png",
      },

      {
        color: "#1FCEC9",
        size: "S",
        salePrice: 99,
        discountedPrice: 69,
        imgUrl: "/watch/cyan.png",
      },
      {
        color: "#1FCEC9",
        size: "M",
        salePrice: 99,
        discountedPrice: 79,
        imgUrl: "/watch/cyan.png",
      },
      {
        color: "#1FCEC9",
        size: "L",
        salePrice: 99,
        discountedPrice: 89,
        imgUrl: "/watch/cyan.png",
      },
      {
        color: "#1FCEC9",
        size: "XL",
        salePrice: 110,
        discountedPrice: 99,
        imgUrl: "/watch/cyan.png",
      },

      {
        color: "#4B97D3",
        size: "S",
        salePrice: 99,
        discountedPrice: 69,
        imgUrl: "/watch/blue.png",
      },
      {
        color: "#4B97D3",
        size: "M",
        salePrice: 99,
        discountedPrice: 79,
        imgUrl: "/watch/blue.png",
      },
      {
        color: "#4B97D3",
        size: "L",
        salePrice: 99,
        discountedPrice: 89,
        imgUrl: "/watch/blue.png",
      },
      {
        color: "#4B97D3",
        size: "XL",
        salePrice: 110,
        discountedPrice: 99,
        imgUrl: "/watch/blue.png",
      },

      {
        color: "#3B4747",
        size: "S",
        salePrice: 99,
        discountedPrice: 69,
        imgUrl: "/watch/black.png",
      },
      {
        color: "#3B4747",
        size: "M",
        salePrice: 99,
        discountedPrice: 79,
        imgUrl: "/watch/black.png",
      },
      {
        color: "#3B4747",
        size: "L",
        salePrice: 99,
        discountedPrice: 89,
        imgUrl: "/watch/black.png",
      },
      {
        color: "#3B4747",
        size: "XL",
        salePrice: 110,
        discountedPrice: 99,
        imgUrl: "/watch/black.png",
      },
    ],
  },
];
</script>

<template>
  <main class="py-28">
    <ProductsDetails v-for="(product, index) in products" :data="product" />
  </main>
</template>
