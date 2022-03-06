<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Notif from "@/components/Notif.vue";
import { useCartStore } from "@/store/cartStore";
import { computed, ref, watch } from "vue";

const cartLink = ref<HTMLSpanElement | null>(null);

const cart = useCartStore();
const cartCount = computed(() => (cart.count ? `(${cart.count})` : ""));
watch(cartCount, () => {
  // animation when adding to cart
  cartLink.value.style.color = "white";
  setTimeout(() => {
    cartLink.value.style.color = "hsla(160, 100%, 37%, 1)";
    cartLink.value.style.transition = "all 1s ease-out";
  }, 400);
  cartLink.value.style.transition = null;
});
</script>

<template>
  <header>
    <Notif class="notif" />
    <img alt="Vue logo" class="logo" width="300" src="@/assets/logo.png" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/panier">
          <span class="cart-link-text" ref="cartLink">Panier{{cartCount}}</span>
        </RouterLink>
        <RouterLink to="/tickets">Tickets</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

.white {
  color: "white" !important;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  width: min-content;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .notif {
    width: 90%;
    position: absolute;
    top: 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    flex-direction: column;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
