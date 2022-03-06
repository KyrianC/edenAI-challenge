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
  <li>
    {{ product.title }} - {{ price }}€
    <button @click="addToCart(product)">Ajouter au panier</button>
  </li>
</template>
