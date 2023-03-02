import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import * as apiClient from '../services/http/clients/index'

export interface IClient {
  id: number;
  fullName: string;
  cpf: string;
  phoneOne: string;
  phoneTwo: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface ClientsContextProviderProps {
  children: ReactNode
}

interface ClientsContextType {
  clients: IClient[];
  currentClient: IClient | null;
  updateClients: (newClients: IClient[]) => void;
  fetchClients: (query?: string) => Promise<void>;
  deleteClient: (clientId: number) => Promise<void>;
  createNewClient: (newClient: Omit<IClient, 'id'>) => Promise<void>;
  changeCurrentClient: (clientId: number | null) => void;
  updateClient: (updateClient: IClient) => Promise<void>;
}

export const ClientsContext = createContext({} as ClientsContextType);

export function ClientsContextProvider({ children }: ClientsContextProviderProps ) {
  const [clients, setClients] = useState<IClient[]>([])
  const [currentClient, setCurrentClient] = useState<IClient | null>(null);

  const fetchClients = useCallback(async (query?: string) => {
    const response = await apiClient.listClients(query);

    setClients(response);
  }, [])

  useEffect(() => {
    fetchClients();
  }, [])

  const updateClients = useCallback((newClients: IClient[]) => {
    setClients(newClients)
  }, [])

  const createNewClient = useCallback(async (newClient: Omit<IClient, 'id'>) => {
    const response = await apiClient.createClient(newClient);

    setClients(state => [response, ...state]);
  }, [clients])

  const updateClient = useCallback(async (updateClient: IClient) => {
    const response = await apiClient.updateClient(updateClient);

    const filter = clients.filter(client => client.id !== updateClient.id);

    setClients([response, ...filter])
  }, [clients])

  const deleteClient = useCallback(async (clientId: number) => {
    await apiClient.deleteClient(clientId)

    setClients(state => state.filter(client => client.id !== clientId))
  }, [clients])

  const changeCurrentClient = useCallback((clientId: number | null) => {
    setCurrentClient(clients.filter(client => client.id === clientId)[0] || null);
  }, [clients]);

  return (
    <ClientsContext.Provider value={{
      clients, 
      updateClients, 
      currentClient, 
      fetchClients, 
      createNewClient, 
      changeCurrentClient, 
      updateClient,
      deleteClient
    }}>
      {children}
    </ClientsContext.Provider>
  );
}