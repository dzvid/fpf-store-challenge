import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';

import { State } from '@/store';

import api from '@/services/api';

import { Product } from '@/models/product';

Vue.use(Vuex);

type Context = ActionContext<ProductsState, State>;

export interface ProductsState {
  products: Product[];
  isLoadingProducts: boolean;
  error: any;
}

const namespaced = true;

const products: Product[] = [];

const state: ProductsState = {
  products,
  isLoadingProducts: false,
  error: null,
};

const getters = {
  getProducts: (state: ProductsState): Product[] => state.products,
  getProductsLoading: (state: ProductsState): boolean =>
    state.isLoadingProducts,
  getHasProductsLoadingFailed: (state: ProductsState): boolean =>
    state.error !== null,
  getProductsLoadingError: (state: ProductsState): any => state.error,
};
const mutations = {
  LOAD_PRODUCTS_PENDING(state: ProductsState): void {
    state.isLoadingProducts = true;
  },
  LOAD_PRODUCTS_SUCCESS(state: ProductsState, products: Product[]): void {
    state.isLoadingProducts = false;
    state.error = null;
    state.products = products;
  },
  LOAD_PRODUCTS_ERROR(state: ProductsState, error: any): void {
    state.isLoadingProducts = false;
    state.error = error;
  },
};

const actions = {
  async fetchProducts(context: Context): Promise<void> {
    try {
      context.commit('LOAD_PRODUCTS_PENDING');

      const products: Product[] = await api.products.getProducts();

      context.commit('LOAD_PRODUCTS_SUCCESS', products);
    } catch (error) {
      context.commit('LOAD_PRODUCTS_ERROR', error);
    }
  },
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
