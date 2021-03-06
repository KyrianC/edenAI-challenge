<script setup lang="ts">
import { useCartStore } from "@/store/cartStore";
import CartItem from "@/components/CartItem.vue";
import usePrice from "@/hooks/price.ts";
import type { ProductType } from "@/types/product.ts";
import { HTTP } from "@/main.ts";
import { useRouter } from "vue-router";

const router = useRouter();

const cart = useCartStore();

const getTotalPrice = (): [string, number] => {
  let total = 0;
  cart.products.forEach((x: ProductType) => {
    const [_, num] = usePrice(x.base_price, x.quantity, x.discount);
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
    cart.clear();
    router.push(`/tickets/?ordered=success&ticket=${res.data.id}`);
  } catch (err) {
    console.error("ERROR", err);
    router.push("?ordered=error");
  }
};
</script>

<template>
  <div v-if="cart.count > 0">
    <ul>
      <li class="product" v-for="product in cart.products" :key="product.id">
        <CartItem :product="product" />
        <div class="add-remove">
          <button @click="cart.remove(product)">-</button>
          <button @click="cart.add(product)">+</button>
        </div>
      </li>
    </ul>
    <p class="total-price">Total Panier: {{ getTotalPrice()[0] }}€</p>
    <div class="cart-button">
      <button class="order" @click="submitOrder">Valider Achat</button>
      <button class="clear-cart" @click="cart.clear">Vider le Panier</button>
    </div>
  </div>
  <div v-else>Le Panier est vide</div>
</template>


<style scoped>
.product {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-remove {
  padding: 0 5px;
}
.add-remove button {
  border-radius: 100%;
  height: 30px;
  width: 30px;
  background-color: var(--color-background-mute);
  border: solid 1px var(--color-border);
  color: white;
  margin: 0 5px;
  cursor: pointer;
}

.total-price {
  font-size: 1.3rem;
  text-decoration: underline;
}

.cart-button {
  margin-top: 1rem;
}

.cart-button button {
  border: solid 2px var(--color-border);
  border-radius: 30px;
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 0.7em;
  margin-left: 0.5em;
  cursor: pointer;
  font-size: 1.1em;
}
.cart-button .order {
  background-color: hsla(160, 50%, 37%, 1);
  border-color: hsla(160, 50%, 37%, 1);
}

ul {
  padding: 0;
}

button:hover {
  border-color: var(--color-border-hover);
}
</style>
