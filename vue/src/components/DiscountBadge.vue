<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  discount: "BD" | "PD" | null;
  message: string;
}>();
</script>

<template>
  <template v-if="discount">
    <div :class="discount" class="discount">{{ message }}</div>
  </template>
</template>

<style scoped>
.discount {
  border-radius: 5px;
  padding: 5px;
  font-size: 10px;
  font-weight: 800;
}
.discount.BD {
  background-color: #1e159a;
}
.discount.PD {
  background-color: #9a1633;
}
</style>
