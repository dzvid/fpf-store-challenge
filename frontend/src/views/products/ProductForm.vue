<template>
  <PageWrapper>
    <PageHeader class="d-flex flex-row align-center">
      <PageTitle>Adicionar produto</PageTitle>
    </PageHeader>

    <v-card max-width="420">
      <v-card-text>
        <v-container fluid>
          <v-form id="form" ref="form">
            <v-row align-sm="center" justify-sm="center">
              <v-col cols="12">
                <v-text-field
                  v-model="product.name"
                  :rules="[(v) => !!v || 'O campo é obrigatório.']"
                  label="Nome do produto"
                  type="text"
                  name="name"
                  prepend-icon="mdi-tag-outline"
                  required
                  outlined
                  dense
                  validate-on-blur
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row align-sm="center" justify-sm="center">
              <v-col cols="12">
                <v-select
                  v-model="product.category"
                  :loading="getCategoriesLoading"
                  :disabled="getCategoriesLoading"
                  :items="getCategories"
                  :item-value="'name'"
                  :item-text="'name'"
                  :rules="[(v) => !!v || 'O campo é obrigatório.']"
                  :label="getCategoriesLoading ? 'Carregando...' : 'Categoria'"
                  name="category"
                  prepend-icon="mdi-shape-outline"
                  required
                  outlined
                  dense
                  validate-on-blur
                  no-data-text="Não há categorias disponíveis."
                ></v-select>
              </v-col>
            </v-row>

            <v-row align-sm="center" justify-sm="center">
              <v-col cols="12">
                <v-text-field
                  v-model.number="product.price"
                  :rules="[
                    (v) => !!v || 'O campo é obrigatório.',
                    (v) => v > 0 || 'Valor deve ser maior que zero.',
                  ]"
                  label="Preço unitário"
                  prepend-icon="mdi-currency-brl"
                  type="number"
                  name="price"
                  min="0"
                  required
                  outlined
                  dense
                  validate-on-blur
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row align-sm="center" justify-sm="center">
              <v-col cols="12">
                <v-text-field
                  v-model.number="product.quantity"
                  :rules="[
                    (v) => !!v || 'O campo é obrigatório.',
                    (v) => v > 0 || 'Valor deve ser maior que zero.',
                  ]"
                  label="Quantidade"
                  prepend-icon="mdi-expand-all"
                  type="number"
                  min="0"
                  step="1"
                  name="quantity"
                  required
                  outlined
                  dense
                  validate-on-blur
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="mt-4 d-flex justify-center align-center">
                <v-btn text @click="navigateToProductsList" class="mr-2">
                  Cancelar
                </v-btn>
                <v-btn
                  type="submit"
                  form="form"
                  color="primary"
                  @click.prevent="submit"
                  >Salvar</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
    </v-card>
  </PageWrapper>
</template>

<script lang="ts">
import Vue from 'vue';

import PageWrapper from '@/components/page/PageWrapper.vue';
import PageHeader from '@/components/page/PageHeader.vue';
import PageTitle from '@/components/page/PageTitle.vue';
import { Product } from '@/models/product';
import { mapActions, mapGetters } from 'vuex';

type VForm = Vue & { validate: () => boolean };

interface Data {
  product: Product;
}

export default Vue.extend({
  name: 'ProductForm',
  components: {
    PageWrapper,
    PageTitle,
    PageHeader,
  },
  async created() {
    await this.fetchCategories();
  },
  async beforeRouteUpdate(to, from, next) {
    await this.fetchCategories();
    next();
  },
  data(): Data {
    return {
      product: {} as Product,
    };
  },
  computed: {
    ...mapGetters('categoriesModule', [
      'getCategories',
      'getCategoriesLoading',
      'getHasCategoriesLoadingFailed',
      'getCategoryLoadingError',
    ]),
    ...mapGetters('productsModule', [
      'getCreateProductLoading',
      'getHasCreateProductLoadingFailed',
      'getCreateProductLoadingError',
    ]),
    form(): VForm {
      return this.$refs.form as VForm;
    },
  },
  methods: {
    ...mapActions('categoriesModule', ['fetchCategories']),
    ...mapActions('productsModule', ['createProduct']),
    navigateToProductsList() {
      this.$router.push({ name: 'products.get' });
    },
    async submit() {
      if (this.validateForm()) {
        await this.createProduct(this.product);

        if (!this.getHasCreateProductLoadingFailed) {
          this.navigateToProductsList();
        }
      }
    },
    validateForm(): boolean {
      return this.form.validate();
    },
  },
});
</script>

<style></style>