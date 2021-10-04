import httpClient from '@/plugins/axios';

import { Product } from '@/models/product';

async function getProducts(): Promise<Product[]> {
  const { data } = await httpClient.get<Product[]>('/products');
  return data;
}

const productsApi = {
  getProducts,
};

export default productsApi;
