<script setup lang="ts">
import usePrice from "@/hooks/price.ts";
import type { ProductType } from "@/types/product";
import { computed } from "vue";

const props = defineProps<{
  product: ProductType;
}>();

const [base_price] = usePrice(props.product.base_price);
</script>

<template>
  <div class="product">
    <p>
      <span class="title">{{ product.title }}</span>
      - {{ base_price }}€ x{{ product.quantity }}
    </p>
    <p class="discount" v-show="product.discount">Réduction: "{{ product.get_discount_display }}"</p>
    <p
      class="total-price"
    >Total: {{ usePrice(product.base_price, product.quantity, product.discount)[0] }}€</p>
  </div>
</template>

<style scoped>
.product {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
}

.product p {
  margin: 2px 0;
  width: 100%;
}

.discount {
  font-size: 0.8rem;
}

.product .title {
  font-size: 1.3rem;
  margin-right: auto;
}
.total-price {
  font-size: 1.2rem;
  margin-right: auto;
}
</style>
