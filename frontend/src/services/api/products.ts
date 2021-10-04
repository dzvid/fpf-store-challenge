import httpClient from '@/plugins/axios';

import { Product } from '@/models/product';

async function getProducts(): Promise<Product[]> {
  const { data } = await httpClient.get<Product[]>(
    '/products?_expand=category'
  );
  return data;
}

async function deleteProduct(productId: number): Promise<void> {
  return await httpClient.delete(`/products/${productId}`);
}

async function createProduct(product: Product): Promise<Product> {
  return await httpClient.post(`/products`, product);
}

async function updateProduct(product: Product): Promise<Product> {
  return await httpClient.put(`/products/${product.id}`, product);
}

async function getProductById(productId: string): Promise<Product> {
  return await httpClient.get(`/products/${productId}`);
}

const productsApi = {
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductById,
};

export default productsApi;
