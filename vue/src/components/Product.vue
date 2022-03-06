<script setup lang="ts">
import type { ProductType } from "@/types/product.ts";
import usePrice from "@/hooks/price";
import { useCartStore } from "@/store/cartStore";

const props = defineProps<{
  product: ProductType;
}>();

const cart = useCartStore();

cart.$subscribe((_mutation, state) => {
  // save to localStorage each time store is modified
  localStorage.setItem("cart", JSON.stringify(state));
});

const addToCart = () => {
  cart.count++;
  const product = cart.products.find((x) => x.id == props.product.id);
  if (product) {
    product.quantity++;
  } else {
    cart.products.push({ ...props.product, quantity: 1 });
  }
};

const price = usePrice(props.product.base_price);
</script>

<template>
  <li>
    {{ product.title }} - {{ price }}€
    <button @click="addToCart">Ajouter au panier</button>
  </li>
</template>
