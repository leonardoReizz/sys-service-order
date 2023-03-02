import { IProduct } from '../../../context/ProductsContext';
import { api } from '../../axios';

export async function createProduct(product: Omit<IProduct, 'id'>): Promise<IProduct>  {
  const response = await api.post('/products', {
    ...product
  });

  return response.data;
}

export async function listProducts(query?: string): Promise<IProduct[]> {
  const response = await api.get('/products', {
    params: {q: query}
  });

  return response.data;
}

export async function deleteProduct(productId: number) {
  await api.delete(`/products/${productId}`)
}

export async function updateProduct(updateProduct: IProduct): Promise<IProduct> {
  const response = await api.put(`/products/${updateProduct.id}`, {
    ...updateProduct
  })

  return response.data;
}
