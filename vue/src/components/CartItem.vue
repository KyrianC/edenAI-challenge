<script setup lang="ts">
import usePrice from "@/hooks/price.ts";
import type { ProductType } from "@/types/product";

const props = defineProps<{
  product: ProductType;
}>();

const [base_price] = usePrice(props.product.base_price);
</script>

<template>
  <div class="product">
    <p>{{ product.title }} - {{ base_price }}€ x{{ product.quantity }}</p>
    <p
      class="total-price"
    >-- {{ usePrice(product.base_price, product.quantity, product.discount)[0] }}€</p>
  </div>
</template>

<style scoped>
.product {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
}
.total-price {
  margin-left: 1rem;
  font-size: 1.2rem;
}
</style>
