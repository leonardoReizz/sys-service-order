import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import * as apiService from "../services/http/services";
import {IServiceOrder} from "./ServiceOrderContext";

export interface IService {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
}

interface ServicesContextType {
  services: IService[];
  currentService: IService | null;
  createNewService: (newService: Omit<IService,'id'>) => Promise<void>;
  updateService: (updateService: IService) => Promise<void>;
  changeCurrentService: (newCurrentService: IService | null) => void;
  fetchServices: (query?: string) => Promise<void>;
  deleteService: (serviceId: number) => Promise<void>;
}

interface ProductsContextProviderProps {
  children: ReactNode;
}

export const ServicesContext = createContext({} as ServicesContextType)

export function ServicesContextProvider({children}: ProductsContextProviderProps) {
  const [services, setServices] = useState<IService[]>([])
  const [currentService, setCurrentService] = useState<IService | null>(null);

  async function fetchServices(query?: string) {
    const list = await apiService.listServices(query);
    setServices(list)
  }

  const createNewService = useCallback(async (data: Omit<IService, 'id'>) =>  {
    const response = await apiService.createService(data);

    setServices(state => [response, ...state])
  }, [services]);

  const changeCurrentService = useCallback((newCurrentProduct: IService | null) => {
    setCurrentService(newCurrentProduct)
  }, [])

  const deleteService = useCallback(async (productId: number) => {
    await apiService.deleteService(productId)

    setServices(state => state.filter(product => product.id !== productId))
  }, [services]);

  const updateService = useCallback(async (updateService: IService) => {
    const response = await apiService.updateService(updateService);

    const filter = services.filter(service => service.id !== updateService.id);

    setServices([response, ...filter]);
  }, [services]);

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <ServicesContext.Provider value={{
      services,
      currentService,
      fetchServices,
      createNewService,
      changeCurrentService,
      deleteService,
      updateService,
    }}>
      {children}
    </ServicesContext.Provider>
  )
}