import { defineStore } from "pinia";
// import {useNotificationStore} from '@/stores/notificationStore'
// import {useAddressStore} from '@/stores/userAddressStore';

export const useCartStore = defineStore("cartStore", {
  persist: true,
  state: () => ({
    shouldOpen: false,
    products: [],
    total: 0,
    totalNoOfProducts: 0,
  }),
  actions: {
    open(type, title, msg) {
      this.shouldOpen = true;
    },
    close() {
      this.shouldOpen = false;
    },
    getState() {
      return this.shouldOpen;
    },
    setProduct(productData) {
      if (this.products.length == 0) {
        this.products.push(productData);
      } else if (this.products.length > 0) {
        // let isProductExist = this.products.some(
        //   (product) => product["variationCode"] === productData["variationCode"]
        // );

        let productIndex = this.products.findIndex(
          (product) => product["variationCode"] === productData["variationCode"]
        );

        if (productIndex == -1) {
          this.products.push(productData);
        } else {
          this.products[productIndex]["noOfItem"] =
            this.products[productIndex]["noOfItem"] + productData["noOfItem"];
        }
      }
    },
    removeProduct() {},
    emptyCart() {},
    getProducts() {
      return this.products;
    },
    calculateTotalPriceNProduct(){
        let totalPrice = 0
        let totalProducts = 0
        this.products.map((product, index) => {
            totalProducts = totalProducts + product['noOfItem']
            totalPrice = product['price'] *product['noOfItem'] + totalPrice
            console.log(totalPrice, product['noOfItem'])

        })
        console.log(totalPrice)
        this.total = totalPrice
        this.totalNoOfProducts = totalProducts
    },
  },
});


