import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';

import { State } from '@/store';

import api from '@/services/api';

import { Category } from '@/models/category';

Vue.use(Vuex);

type Context = ActionContext<CategoriesState, State>;

export interface CategoriesState {
  categories: Category[];
  isLoadingCategories: boolean;
  error: any;
}

const namespaced = true;

const categories: Category[] = [];

const state: CategoriesState = {
  categories,
  isLoadingCategories: false,
  error: null,
};

const getters = {
  getCategories: (state: CategoriesState): Category[] => state.categories,
  getCategoriesLoading: (state: CategoriesState): boolean =>
    state.isLoadingCategories,
  getHasCategoriesLoadingFailed: (state: CategoriesState): boolean =>
    state.error !== null,
  getCategoryLoadingError: (state: CategoriesState): any => state.error,
};
const mutations = {
  LOAD_CATEGORIES_PENDING(state: CategoriesState): void {
    state.isLoadingCategories = true;
  },
  LOAD_CATEGORIES_SUCCESS(
    state: CategoriesState,
    categories: Category[]
  ): void {
    state.isLoadingCategories = false;
    state.error = null;
    state.categories = categories;
  },
  LOAD_CATEGORIES_ERROR(state: CategoriesState, error: any): void {
    state.isLoadingCategories = false;
    state.error = error;
  },
};

const actions = {
  async getCategories(context: Context): Promise<void> {
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
