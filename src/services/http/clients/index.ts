import { IClient } from "../../../context/ClientsContext"
import { api } from "../../axios"

export async function createClient(client: Omit<IClient, 'id'>): Promise<IClient> {
  const response = await api.post('/clients', {
    ...client
  })

  return response.data;
}


export async function listClients(query?: string): Promise<IClient[]> {
  const response = await api.get('/clients', {
    params: {
      q: query,
    }
  })

  return response.data;
}

export async function updateClient(updateClient: IClient): Promise<IClient> {
  const response = await api.put(`/clients/${updateClient.id}`, {
    ...updateClient
  })

  return response.data;
}

export async function deleteClient(clientId: number): Promise<void> {
  await api.delete(`/clients/${clientId}`)
}