<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const message = computed(() => {
  if (route.query.ordered == "success") {
    return "Commande Achetée";
  } else if (route.query.ordered == "error") {
    return "Une erreur est survenu";
  } else {
    return null;
  }
});
</script>

<template>
  <p
    v-if="route.query.ordered"
    :class="route.query.ordered == 'success' ? 'success' : 'error'"
  >{{ message }}</p>
</template>

<style scoped>
p {
  border-radius: 5px;
  padding: 5px;
}
.success {
  background-color: hsla(160, 30%, 37%, 1);
}
.error {
  background-color: #9a3234;
}
</style>
