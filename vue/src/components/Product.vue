<script setup lang="ts">
import type { ProductType } from "@/types/product.ts";
import usePrice from "@/hooks/price";
import { useCartStore } from "@/store/cartStore";
import useCart from "@/hooks/cart";

const props = defineProps<{
  product: ProductType;
}>();

const cart = useCartStore();
const { addToCart } = useCart(cart);

const [price] = usePrice(props.product.base_price);
</script>

<template>
  <li class="product">
    {{ product.title }} - {{ price }}€
    <button @click="addToCart(product)">Ajouter au panier</button>
  </li>
</template>

<style scoped>
.product {
  font-size: 1.2rem;
  margin: 1rem;
}

button {
  border: solid 2px var(--color-border);
  border-radius: 30px;
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 0.7em;
  margin-left: 0.5em;
  cursor: pointer;
}
button:hover {
  border-color: var(--color-border-hover);
}
</style>
