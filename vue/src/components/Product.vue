<script setup lang="ts">
import type { ProductType } from "@/types/product.ts";
import usePrice from "@/hooks/price";
import { useCartStore } from "@/store/cartStore";
import DiscountBadge from "@/components/DiscountBadge.vue";

const props = defineProps<{
  product: ProductType;
}>();

const cart = useCartStore();

const [price] = usePrice(props.product.base_price);
</script>

<template>
  <li class="product">
    <div class="title">
      <span>{{ product.title }}</span>
      <DiscountBadge
        class="discount"
        :message="product.get_discount_display"
        :discount="product.discount"
      />
    </div>
    <span class="price">
      {{ price }}€
      <button @click="cart.add(product)">Ajouter au panier</button>
    </span>
  </li>
</template>

<style scoped>
.product {
  font-size: 1.1rem;
  margin: 1.4rem 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.title span {
  margin-right: 10px;
}

button {
  border: solid 2px var(--color-border);
  border-radius: 30px;
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 0.5em;
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: 10px;
}
button:hover {
  border-color: var(--color-border-hover);
}
.price {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
}
</style>
