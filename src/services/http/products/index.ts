import { useCallback } from 'react';
import { api } from '../../axios';
import * as t from './types';

export async function createProduct(product: Omit<t.IProduct, 'id'>): Promise<t.IProduct>  {
  const response = await api.post('/products', {
    ...product
  });

  return response.data;
}

export async function listProducts(query?: string): Promise<t.IProduct[]> {
  const response = await api.get('/products', {
    params: {q: query}
  });

  return response.data;
}

export async function deleteProduct(productId: number) {
  await api.delete(`/products/${productId}`)
}
