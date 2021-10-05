<template>
  <v-btn
    small
    fab
    text
    color="primary"
    @click="navigateToEditProduct(productId)"
  >
    <v-icon>mdi-pencil-outline</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonEditProduct',
  props: {
    productId: {
      required: true,
      type: Number,
    },
  },
  methods: {
    navigateToEditProduct(productId: number) {
      const stringProductId = productId.toString() || '0';

      this.$router.push({
        name: 'products.put',
        params: { editableProductId: stringProductId },
      });
    },
  },
});
</script>

<style></style>
