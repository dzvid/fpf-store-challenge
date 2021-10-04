import Vue from 'vue';
import Vuex from 'vuex';

import productsModule, { ProductsState } from '@/store/products';
import categoriesModule, { CategoriesState } from '@/store/categories';

Vue.use(Vuex);

export interface State {
  products: ProductsState;
  categories: CategoriesState;
}

export default new Vuex.Store<State>({
  modules: {
    productsModule,
    categoriesModule,
  },
});
