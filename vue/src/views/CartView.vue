<script setup lang="ts">
import Cart from "@/components/Cart.vue";
</script>

<template>
  <div class="cart">
    <div>
      <h1>Panier</h1>
      <Cart />
    </div>
  </div>
</template>

<style>
h1 {
  color: var(--color-heading);
}
@media (min-width: 1024px) {
  .cart {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
