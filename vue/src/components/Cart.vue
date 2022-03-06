<script setup lang="ts">
import { useCartStore } from "@/store/cartStore";
import CartItem from "@/components/CartItem.vue";
import usePrice from "@/hooks/price.ts";
import type { ProductType } from "@/types/product.ts";

const cart = useCartStore();

const clearCart = () => {
  localStorage.removeItem("cart");
  cart.$reset();
};

const getTotalPrice = (): string => {
  let total = 0;
  cart.products.forEach((x: ProductType) => {
    const num = usePrice(x.base_price, x.quantity, x.discount, false);
    total += num;
  });
  return total.toFixed(2);
};
</script>

<template>
  <button @click="clearCart">Vider le Panier</button>
  <ul>
    <CartItem v-for="product in cart.products" :product="product" :key="product.id" />
  </ul>
  <p>total: {{ getTotalPrice() }}€</p>
  <button>Order</button>
</template>
