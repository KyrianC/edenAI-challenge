<script setup lang="ts">
import { ref } from "vue";
import { HTTP } from "@/main";
import Receipt from "@/components/Receipt.vue";

const ticketId = ref(1);
const res = ref<null | string>(null);
const notFound = ref(false);
const handleGetTicket = async () => {
  try {
    const ares = await HTTP.get(`/receipt/${ticketId.value}/`);
    res.value = ares.data;
    console.log(res.value);
    notFound.value = false;
  } catch (err) {
    res.value = null;
    if (err.response.status == 404) notFound.value = true;
  }
};
</script>


<template>
  <div>
    <h1>Ticket Recherche</h1>
    <label for>
      Ticket ID:
      <input v-model="ticketId" min="1" />
    </label>
    <button @click="handleGetTicket">chercher</button>
    <Receipt v-if="res" :receipt="res" />
    <p v-if="notFound">Aucun ticket avec cet ID</p>
  </div>
</template>
