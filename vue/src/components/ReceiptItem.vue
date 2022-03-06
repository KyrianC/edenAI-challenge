<script setup lang="ts">
import usePrice from "@/hooks/price.ts";
import type { ProductType } from "@/types/product";

const props = defineProps<{
  receiptItem: {
    id: number;
    quantity: number;
    price: number;
    product: ProductType;
    product_id: number;
  };
}>();

const [price] = usePrice(props.receiptItem.price);
const [total_price] = usePrice(
  props.receiptItem.price,
  props.receiptItem.quantity,
  props.receiptItem.product.discount
);
</script>

<template>
  <p>{{ receiptItem.product.title }} - {{ price }}€ x{{ receiptItem.quantity }}</p>
  <p>----{{ total_price }}€</p>
</template>
