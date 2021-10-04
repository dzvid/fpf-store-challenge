<template>
  <v-dialog v-model="visible" persistent max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn small fab text color="error" v-bind="attrs" v-on="on">
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-body-1"
        >Confirma a exclusão do produto?
      </v-card-title>
      <v-card-text>
        {{ product.name }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="visible = false"
          :disabled="getDeleteProductLoading"
        >
          Cancelar
        </v-btn>
        <v-btn
          color="error"
          text
          @click="handleDelete"
          :loading="getDeleteProductLoading"
        >
          Excluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { Product } from '@/models/product';

export default Vue.extend({
  name: 'ButtonDeleteProduct',
  props: {
    product: {
      required: true,
      type: Object as PropType<Product>,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    ...mapGetters('productsModule', ['getDeleteProductLoading']),
  },
  methods: {
    ...mapActions('productsModule', ['deleteProduct', 'fetchProducts']),
    async handleDelete() {
      await this.deleteProduct(this.product.id);
      this.visible = false;
      await this.fetchProducts();
    },
  },
});
</script>

<style></style>
