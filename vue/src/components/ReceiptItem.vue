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

const [price, p] = usePrice(props.receiptItem.price);
const [total_price, tp] = usePrice(
  props.receiptItem.price,
  props.receiptItem.quantity,
  props.receiptItem.product.discount
);
const [reductionPrice] = usePrice(
  Math.abs(p * props.receiptItem.quantity - tp)
);
</script>

<template>
  <div>
    <div class="detail">
      <p>
        <span class="title">{{ receiptItem.product.title }}</span>
        x{{ receiptItem.quantity }}
      </p>
      <span>{{ price }}€</span>
    </div>
    <div class="detail" v-show="receiptItem.product.discount">
      <p class="discount">réduction: "{{ receiptItem.product.get_discount_display }}"</p>
      <span>-{{ reductionPrice }}€</span>
    </div>
    <p class="total">total: {{ total_price }}€</p>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.discount {
  font-size: 0.8rem;
}

.total {
  margin-left: auto;
  font-weight: 500;
}

.detail {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.title {
  font-weight: 500;
}
</style>
