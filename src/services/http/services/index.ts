import { api } from '../../axios';
import {IService} from "../../../context/ServiceContext";

export async function createService(serviceOrder: Omit<IService, 'id'>): Promise<IService>  {
  const response = await api.post('/service', {
    ...serviceOrder
  });

  return response.data;
}

export async function listServices(query?: string): Promise<IService[]> {
  const response = await api.get('/service', {
    params: {q: query}
  });

  return response.data;
}

export async function deleteService(serviceId: number) {
  await api.delete(`/service/${serviceId}`)
}

export async function updateService(updateService: IService): Promise<IService> {
  const response = await api.put(`/service/${updateService.id}`, {
    ...updateService
  })

  return response.data;
}
