<script setup lang="ts">
import ReceiptItem from "@/components/ReceiptItem.vue";
import usePrice from "@/hooks/price.ts";

const props = defineProps<{
  receipt: Object;
}>();
</script>

<template>
  <div id="receipt">
    <h2>Eden AI</h2>
    <p class="dash">----------------------------</p>
    <div class="body">
      <ReceiptItem v-for="item in receipt.items" :key="item.id" :receiptItem="item" />
      <p class="dash">----------------------------</p>
      <p class="total">Prix Total: {{ usePrice(props.receipt.total_price)[0] }}€</p>
    </div>
    <p class="dash">----------------------------</p>
    <p>Ticket ID: {{ receipt.id }}</p>
    <p>Date: {{ receipt.created }}</p>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&family=IBM+Plex+Mono:wght@400;500;700&display=swap");
#receipt {
  background-color: whitesmoke;
  color: black;
  font-family: "IBM Plex Mono";
  padding: 1rem 3rem;
}
#receipt h2 {
  font-weight: bold;
  text-align: center;
}

.total {
  font-weight: bold;
}

.dash {
  text-align: center;
}
</style>
