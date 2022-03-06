<script setup lang="ts">
import ProductList from "@/components/ProductList.vue";
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <ProductList />
      </template>
      <template #fallback>loading...</template>
    </Suspense>
  </main>
</template>
