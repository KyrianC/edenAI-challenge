<script setup lang="ts">
import { useCartStore } from "@/store/cartStore";
import useCart from "@/hooks/cart";
import CartItem from "@/components/CartItem.vue";
import usePrice from "@/hooks/price.ts";
import type { ProductType } from "@/types/product.ts";
import { HTTP } from "@/main.ts";
import { computed } from "vue";

const cart = useCartStore();
const { addToCart, removeFromCart, clearCart } = useCart(cart);

const getTotalPrice = (): [string, number] => {
  let total = 0;
  cart.products.forEach((x: ProductType) => {
    const [_, num] = usePrice(x.base_price, x.quantity, x.discount);
    console.log(num);
    total += num;
  });
  return usePrice(total);
};

let [_, totalPrice] = getTotalPrice();

const formatPostItems = () => {
  const items = [];
  cart.products.forEach((x) => {
    items.push({
      quantity: x.quantity,
      price: x.base_price,
      product_id: x.id,
    });
  });
  return items;
};

const submitOrder = async () => {
  try {
    const res = await HTTP.post("/receipt/create/", {
      items: formatPostItems(),
      total_price: totalPrice,
    });
    console.log(res);
  } catch (err) {
    console.error("ERROR", err);
  }
};
</script>

<template>
  <button @click="clearCart">Vider le Panier</button>
  <ul>
    <li v-for="product in cart.products" :key="product.id">
      <CartItem :product="product" />
      <button @click="addToCart(product)">+</button>
      <button @click="removeFromCart(product)">-</button>
    </li>
  </ul>
  <p>total: {{ getTotalPrice()[0] }}€</p>
  <button @click="submitOrder">Order</button>
</template>
