import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => (JSON.parse(localStorage.getItem('cart')) || {
        count: 0,
        products: []
    })
})
