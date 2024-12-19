<script setup>
const props = defineProps({
  title: String,
  productData: {
    type: Array,
    default: [
      {
        name: "Lindsay Walton",
        imgSrc: "/watch/purple.png",
        color: "#816BFF",
        size: "S",
        noOfItem: "Member",
        price: 12,
      },
    ],
  },
});
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-lg font-semibold text-darkGrey">{{ title }}</h1>
      </div>
    </div>
    <div class="mt-2 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 max-h-[600px] overflow-y-scroll scrollbar-style">
          <table class="min-w-full divide-y divide-gray-300 ">
            <thead>
              <tr >
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-thin text-lightGrey sm:pl-0"
                >
                  Item
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-center text-sm font-thin text-lightGrey"
                >
                  Color
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-center text-sm font-thin text-lightGrey"
                >
                  Size
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-center text-sm font-thin text-lightGrey"
                >
                  Qnt
                </th>

                <th
                  scope="col"
                  class="px-3 py-3.5 text-right text-sm font-thin text-lightGrey"
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 max-h-28 overflow-y-auto">
              <tr v-for="product in productData" :key="product.email">
                <td
                  class="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-0 flex items-center gap-2"
                >
                  <img
                    :src="product.imgSrc"
                    alt=""
                    class="h-8 w-8 object-cover rounded"
                  />
                  <p class="text-sm font-base text-darkGrey">
                    {{ product.name }}
                  </p>
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-sm text-darkGrey text-center"
                >
                  {{ product.color }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-sm text-darkGrey text-center font-semibold"
                >
                  {{ product.size }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-sm text-darkGrey text-center font-semibold"
                >
                  {{ product.noOfItem }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-sm text-darkGrey font-semibold text-right"
                >
                  ${{ product.price }}
                </td>
              </tr>

              <tr>
                <td
                  class="whitespace-nowrap py-4 text-base text-darkGrey font-medium text-left"
                  colspan="3"
                >
                  Total
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-base text-darkGrey font-medium text-center"
                >
                  2
                </td>
                <td
                  class="whitespace-nowrap pl-3 py-4 text-base text-darkGrey font-medium text-right"
                >
                  $350.00
                </td>
              </tr>
            </tbody>
          </table>

          <div class="flex justify-end gap-2 pt-4">
            <ButtonHollow name="Continue Shopping" />
            <ButtonMd name="Checkout" classes="font-semibold"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
