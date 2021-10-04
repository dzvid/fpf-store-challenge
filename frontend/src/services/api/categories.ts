import httpClient from '@/plugins/axios';

import { Category } from '@/models/category';

async function getCategories(): Promise<Category[]> {
  const { data } = await httpClient.get<Category[]>('/categories');
  return data;
}

const categoriesApi = {
  getCategories,
};

export default categoriesApi;
