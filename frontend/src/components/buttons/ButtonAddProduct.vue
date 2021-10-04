<template>
  <v-btn color="primary" @click="navigateToCreateProduct()">
    <v-icon left>mdi-plus</v-icon>
    Novo produto
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    navigateToCreateProduct() {
      this.$router.push({ name: 'products.post' });
    },
  },
});
</script>

<style></style>
