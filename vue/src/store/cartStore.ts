import { defineStore } from "pinia";
import type { ProductType } from '@/types/product'

export const useCartStore = defineStore('cart', {
    state: () => (JSON.parse(localStorage.getItem('cart')) || {
        count: 0,
        products: []
    }),
    actions: {
        add(product: ProductType) {
            this.count++;
            const cartProduct = this.products.find((x: ProductType) => x.id == product.id);
            if (cartProduct) {
                cartProduct.quantity++;
            } else {
                this.products.push({ ...product, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(this));
        },
        remove(product: ProductType) {
            this.count--;
            const cartProduct = this.products.find((x: ProductType) => x.id == product.id);
            if (cartProduct.quantity > 1) {
                cartProduct.quantity--
            } else {
                this.products = [...this.products].filter((x: ProductType) => x.id !== product.id);
            }
            localStorage.setItem("cart", JSON.stringify(this));
        },
        clear() {
            localStorage.removeItem('cart')
            this.$reset()
        }
    }
})
