<script setup lang="ts">
import { ref } from "vue";
import { HTTP } from "@/main";
import Receipt from "@/components/Receipt.vue";
import { useRoute } from "vue-router";

const route = useRoute();

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
if (route.query?.ticket) {
  ticketId.value = +route.query.ticket;
  handleGetTicket();
}
</script>


<template>
  <div>
    <h1>Tickets</h1>
    <form @submit.prevent="handleGetTicket">
      <label>Ticket ID:</label>
      <input v-model="ticketId" min="1" />
      <button type="submit">chercher</button>
    </form>
    <Receipt v-if="res" :receipt="res" />
    <p v-if="notFound">Aucun ticket avec cet ID</p>
  </div>
</template>

<style scoped>
button {
  border: solid 2px var(--color-border);
  border-radius: 5px;
  background-color: var(--color-background);
  color: var(--color-text);
  margin-left: 0.5em;
  cursor: pointer;
}
form label {
  margin-bottom: 0;
}
form {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
h1,
label {
  display: block;
  margin-bottom: 1rem;
}
</style>
