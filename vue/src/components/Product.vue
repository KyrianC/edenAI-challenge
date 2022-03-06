<script setup lang="ts">
import type { ProductType } from "@/types/product.ts";
import usePrice from "@/hooks/price";
const props = defineProps<{
  product: ProductType;
}>();
const price = usePrice(props.product.base_price);
const addToCart = () => console.log(`${props.product.title} added to cart`);
</script>

<template>
  <li>
    {{ product.title }} - {{ price }}€
    <button @click="addToCart">Ajouter au panier</button>
  </li>
</template>
