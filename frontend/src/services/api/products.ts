import httpClient from '@/plugins/axios';

import { Product } from '@/models/product';

async function getProducts(): Promise<Product[]> {
  const { data } = await httpClient.get<Product[]>('/products');
  return data;
}

async function deleteProduct(productId: number): Promise<void> {
  return await httpClient.delete(`/products/${productId}`);
}

const productsApi = {
  getProducts,
  deleteProduct,
};

export default productsApi;
