<script setup lang="ts">
import type { ProductType } from "@/types/product.ts";
import Product from "@/components/Product.vue";
import { HTTP } from "@/main.ts";
import { ref } from "vue";

const res = await HTTP.get("/products/");
const products: ProductType[] = res.data;
</script>

<template>
  <ul class="list">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </ul>
</template>

<style scoped>
.list {
  padding: 0;
}
</style>
