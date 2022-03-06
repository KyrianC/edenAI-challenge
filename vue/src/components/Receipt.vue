<script setup lang="ts">
import ReceiptItem from "@/components/ReceiptItem.vue";
import usePrice from "@/hooks/price.ts";

const props = defineProps<{
  receipt: Object;
}>();
</script>

<template>
  <ReceiptItem v-for="item in receipt.items" :key="item.id" :receiptItem="item" />
  <p>Total price: {{ usePrice(props.receipt.total_price)[0] }}€</p>
</template>
