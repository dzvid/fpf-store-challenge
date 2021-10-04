<template>
  <PageWrapper>
    <PageHeader class="d-flex flex-row align-center justify-space-between">
      <PageTitle>Produtos</PageTitle>
      <ButtonAddProduct />
    </PageHeader>

    <v-card>
      <v-card-title>
        <v-container pa-0>
          <v-row no-gutters align="center" justify="end">
            <v-col cols="12" sm="5" md="4">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                placeholder="Buscar por produto..."
                label="Buscar por produto..."
                single-line
                hide-details
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-title>
      <v-card-text>
        <v-container pa-0>
          <v-row no-gutters>
            <v-col cols="12">
              <v-data-table
                :items="getProducts"
                :search="search"
                :items-per-page="10"
                :headers="headers"
                :loading="getProductsLoading"
                loading-text="Carregando produtos...Por favor, aguarde"
                no-data-text="Não há produtos registrados."
                no-results-text="O produto procurado não foi encontrado."
              >
                <template v-slot:item.price="{ item }">
                  <span>{{ formatToLocationCurrency(item.price) }}</span>
                </template>

                <template v-slot:item.actions="{ item }">
                  <ButtonEditProduct class="mr-1" :productId="item.id" />

                  <ButtonDeleteProduct :product="item" />
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </PageWrapper>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

import PageWrapper from '@/components/page/PageWrapper.vue';
import PageHeader from '@/components/page/PageHeader.vue';
import PageTitle from '@/components/page/PageTitle.vue';
import ButtonEditProduct from '@/components/buttons/ButtonEditProduct.vue';
import ButtonDeleteProduct from '@/components/buttons/ButtonDeleteProduct.vue';
import ButtonAddProduct from '@/components/buttons/ButtonAddProduct.vue';

export default Vue.extend({
  name: 'Products',
  components: {
    PageWrapper,
    PageTitle,
    PageHeader,
    ButtonEditProduct,
    ButtonDeleteProduct,
    ButtonAddProduct,
  },
  computed: {
    ...mapGetters('productsModule', [
      'getProducts',
      'getProductsLoading',
      'getHasProductsLoadingFailed',
      'getProductsLoadingError',
    ]),
  },
  methods: {
    ...mapActions('productsModule', ['fetchProducts']),
    formatToLocationCurrency(price: number) {
      return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
  async created() {
    await this.fetchProducts();
  },
  async beforeRouteUpdate(to, from, next) {
    await this.fetchProducts();
    next();
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: 'PRODUTO',
        align: 'start',
        sortable: false,
        value: 'name',
        class: 'text-uppercase white--text primary lighten-1',
      },
      {
        text: 'CATEGORIA',
        value: 'category.name',
        align: 'start',
        sortable: false,
        filterable: false,
        class: 'text-uppercase white--text primary lighten-1',
      },
      {
        text: 'PREÇO (UNIDADE)',
        value: 'price',
        align: 'start',
        sortable: false,
        filterable: false,
        class: 'text-uppercase white--text primary lighten-1',
      },
      {
        text: 'QUANTIDADE',
        value: 'quantity',
        align: 'center',
        sortable: false,
        filterable: false,
        class: 'text-uppercase white--text primary lighten-1',
      },
      {
        text: 'AÇÕES',
        align: 'center',
        sortable: false,
        filterable: false,
        class: 'text-uppercase white--text primary lighten-1',
        value: 'actions',
      },
    ],
  }),
});
</script>
