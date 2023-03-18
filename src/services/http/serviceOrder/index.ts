import { IServiceOrder } from '../../../context/ServiceOrderContext';
import { api } from '../../axios';

export async function createServiceOrder(serviceOrder: Omit<IServiceOrder, 'id'>): Promise<IServiceOrder>  {
  const response = await api.post('/serviceOrders', {
    ...serviceOrder
  });

  return response.data;
}

export async function listServiceOrders(query?: string): Promise<IServiceOrder[]> {
  const response = await api.get('/serviceOrders', {
    params: {q: query}
  });

  return response.data;
}

export async function deleteServiceOrder(serviceOrderID: number) {
  await api.delete(`/serviceOrders/${serviceOrderID}`)
}

export async function updateServiceOrder(updateServiceOrder: IServiceOrder): Promise<IServiceOrder> {
  const response = await api.put(`/products/${updateServiceOrder.id}`, {
    ...updateServiceOrder
  })

  return response.data;
}
