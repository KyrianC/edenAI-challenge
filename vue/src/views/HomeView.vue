<script setup lang="ts">
import ProductList from "@/components/ProductList.vue";
</script>

<template>
  <main>
    <h1>Catalogue</h1>
    <Suspense>
      <template #default>
        <ProductList id="ProductList" />
      </template>
      <template #fallback>loading...</template>
    </Suspense>
  </main>
</template>

<style scoped>
h1 {
  color: var(--color-heading);
}
</style>
