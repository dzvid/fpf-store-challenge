import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';

import { State } from '@/store';

import api from '@/services/api';

import { Product } from '@/models/product';

Vue.use(Vuex);

type Context = ActionContext<ProductsState, State>;

export interface ProductsState {
  products: Product[];
  fetchProductsOperation: {
    loading: boolean;
    error: any;
  };
  deleteProductOperation: {
    loading: boolean;
    error: any;
  };
  createProductOperation: {
    loading: boolean;
    error: any;
  };
  updateProductOperation: {
    loading: boolean;
    error: any;
  };
}

const namespaced = true;

const products: Product[] = [];

const state: ProductsState = {
  products,
  fetchProductsOperation: {
    loading: false,
    error: null,
  },
  deleteProductOperation: {
    loading: false,
    error: null,
  },
  createProductOperation: {
    loading: false,
    error: null,
  },
  updateProductOperation: {
    loading: false,
    error: null,
  },
};

const getters = {
  getProducts: (state: ProductsState): Product[] => state.products,
  // Fetch products
  getProductsLoading: (state: ProductsState): boolean =>
    state.fetchProductsOperation.loading,
  getHasProductsLoadingFailed: (state: ProductsState): boolean =>
    state.fetchProductsOperation.error !== null,
  getProductsLoadingError: (state: ProductsState): any =>
    state.fetchProductsOperation.error,
  // Delete a product
  getDeleteProductLoading: (state: ProductsState): boolean =>
    state.deleteProductOperation.loading,
  getHasDeleteProductLoadingFailed: (state: ProductsState): boolean =>
    state.deleteProductOperation.error !== null,
  getDeleteProductLoadingError: (state: ProductsState): any =>
    state.deleteProductOperation.error,
  // Create a product
  getCreateProductLoading: (state: ProductsState): boolean =>
    state.createProductOperation.loading,
  getHasCreateProductLoadingFailed: (state: ProductsState): boolean =>
    state.createProductOperation.error !== null,
  getCreateProductLoadingError: (state: ProductsState): any =>
    state.createProductOperation.error,
  // Update a product
  getUpdateProductLoading: (state: ProductsState): boolean =>
    state.createProductOperation.loading,
  getHasUpdateProductLoadingFailed: (state: ProductsState): boolean =>
    state.createProductOperation.error !== null,
  getUpdateProductLoadingError: (state: ProductsState): any =>
    state.createProductOperation.error,
  // Get a Product
  getProductById:
    (state: ProductsState) =>
    (productId: string): Product | undefined =>
      state.products.find((product) => product.id === productId),
};
const mutations = {
  LOAD_PRODUCTS_PENDING(state: ProductsState): void {
    state.fetchProductsOperation.loading = true;
    state.fetchProductsOperation.error = null;
  },
  LOAD_PRODUCTS_SUCCESS(state: ProductsState, products: Product[]): void {
    state.fetchProductsOperation.loading = false;
    state.fetchProductsOperation.error = null;
    state.products = products;
  },
  LOAD_PRODUCTS_ERROR(state: ProductsState, error: any): void {
    state.fetchProductsOperation.loading = false;
    state.fetchProductsOperation.error = error;
  },
  DELETE_PRODUCT_PENDING(state: ProductsState): void {
    state.deleteProductOperation.loading = true;
    state.deleteProductOperation.error = null;
  },
  DELETE_PRODUCT_SUCCESS(state: ProductsState): void {
    state.deleteProductOperation.loading = false;
    state.deleteProductOperation.error = null;
  },
  DELETE_PRODUCT_ERROR(state: ProductsState, error: any): void {
    state.deleteProductOperation.loading = false;
    state.deleteProductOperation.error = error;
  },
  CREATE_PRODUCT_PENDING(state: ProductsState): void {
    state.createProductOperation.loading = true;
    state.createProductOperation.error = null;
  },
  CREATE_PRODUCT_SUCCESS(state: ProductsState): void {
    state.createProductOperation.loading = false;
    state.createProductOperation.error = null;
  },
  CREATE_PRODUCT_ERROR(state: ProductsState, error: any): void {
    state.createProductOperation.loading = false;
    state.createProductOperation.error = error;
  },
  UPDATE_PRODUCT_PENDING(state: ProductsState): void {
    state.updateProductOperation.loading = true;
    state.updateProductOperation.error = null;
  },
  UPDATE_PRODUCT_SUCCESS(state: ProductsState): void {
    state.updateProductOperation.loading = false;
    state.updateProductOperation.error = null;
  },
  UPDATE_PRODUCT_ERROR(state: ProductsState, error: any): void {
    state.updateProductOperation.loading = false;
    state.updateProductOperation.error = error;
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
  async deleteProduct(context: Context, productId: number): Promise<void> {
    try {
      context.commit('DELETE_PRODUCT_PENDING');

      await api.products.deleteProduct(productId);

      context.commit('DELETE_PRODUCT_SUCCESS');
    } catch (error) {
      context.commit('DELETE_PRODUCT_ERROR', error);
    }
  },
  async createProduct(context: Context, product: Product): Promise<void> {
    try {
      context.commit('CREATE_PRODUCT_PENDING');

      await api.products.createProduct(product);

      context.commit('CREATE_PRODUCT_SUCCESS');
    } catch (error) {
      context.commit('CREATE_PRODUCT_ERROR', error);
    }
  },
  async updateProduct(context: Context, product: Product): Promise<void> {
    try {
      context.commit('UPDATE_PRODUCT_PENDING');

      await api.products.updateProduct(product);

      context.commit('UPDATE_PRODUCT_SUCCESS');
    } catch (error) {
      context.commit('UPDATE_PRODUCT_ERROR', error);
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
