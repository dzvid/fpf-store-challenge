import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';

import { State } from '@/store';

import api from '@/services/api';

import { Category } from '@/models/category';

Vue.use(Vuex);

type Context = ActionContext<CategoriesState, State>;

export interface CategoriesState {
  categories: Category[];
  getCategoriesOperation: {
    loading: boolean;
    error: any;
  };
}

const namespaced = true;

const categories: Category[] = [];

const state: CategoriesState = {
  categories,
  getCategoriesOperation: {
    loading: false,
    error: null,
  },
};

const getters = {
  getCategories: (state: CategoriesState): Category[] => state.categories,
  getCategoriesLoading: (state: CategoriesState): boolean =>
    state.getCategoriesOperation.loading,
  getHasCategoriesLoadingFailed: (state: CategoriesState): boolean =>
    state.getCategoriesOperation.error !== null,
  getCategoryLoadingError: (state: CategoriesState): any =>
    state.getCategoriesOperation.error,
};
const mutations = {
  LOAD_CATEGORIES_PENDING(state: CategoriesState): void {
    state.getCategoriesOperation.loading = true;
    state.getCategoriesOperation.error = null;
  },
  LOAD_CATEGORIES_SUCCESS(
    state: CategoriesState,
    categories: Category[]
  ): void {
    state.getCategoriesOperation.loading = false;
    state.getCategoriesOperation.error = null;
    state.categories = categories;
  },
  LOAD_CATEGORIES_ERROR(state: CategoriesState, error: any): void {
    state.getCategoriesOperation.loading = false;
    state.getCategoriesOperation.error = error;
  },
};

const actions = {
  async fetchCategories(context: Context): Promise<void> {
    try {
      context.commit('LOAD_CATEGORIES_PENDING');

      const categories: Category[] = await api.categories.getCategories();

      context.commit('LOAD_CATEGORIES_SUCCESS', categories);
    } catch (error) {
      context.commit('LOAD_CATEGORIES_ERROR', error);
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
