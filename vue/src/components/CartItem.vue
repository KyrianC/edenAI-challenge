<script setup lang="ts">
import usePrice from "@/hooks/price.ts";
import type { ProductType } from "@/types/product";

const props = defineProps<{
  product: ProductType;
}>();

const total_cost = usePrice(
  props.product.base_price,
  props.product.quantity,
  props.product.discount
);
const base_price = usePrice(props.product.base_price);
</script>

<template>
  <p>{{ product.title }} - {{ base_price }}€ x{{ product.quantity }}</p>
  <p>----{{ total_cost }}€</p>
</template>
