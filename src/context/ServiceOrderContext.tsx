import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import * as apiServiceOrder from "../services/http/serviceOrder";
import {IProduct} from "./ProductsContext";
import {IService} from "./ServiceContext";
import {IClient} from "./ClientsContext";

export interface IServiceOrder {
  id: number;
  services: IService[];
  products: IProduct[];
  user: IClient;
  description: string;
  totalProducts: number;
  totalServices: number;
  total: number;
}

interface ServiceOrderContextType {
  serviceOrders: IServiceOrder[];
  currentServiceOrder: IServiceOrder | null;
  updateServiceOrder: (updateServiceOrder: IServiceOrder) => Promise<void>;
  fetchServiceOrders: (query?: string) => Promise<void>;
  updateCurrentServiceOrder: (newServiceOrder: IServiceOrder) => void;
  createNewServiceOrder: (data: Omit<IServiceOrder, 'id'>) => Promise<void>;
  deleteServiceOrder: (serviceOrderId: number) => Promise<void>;
}

interface ServiceOrderContextProviderProps {
  children: ReactNode;
}

export const ServiceOrderContext = createContext({} as ServiceOrderContextType)

export function ServiceOrderContextProvider({children}: ServiceOrderContextProviderProps) {
  const [serviceOrders, setServiceOrders] = useState<IServiceOrder[]>([])
  const [currentServiceOrder, setCurrentServiceOrder] = useState<IServiceOrder | null>(null);

  async function fetchServiceOrders(query?: string) {
    const list = await apiServiceOrder.listServiceOrders(query);
    setServiceOrders(list)
  }

  const createNewServiceOrder = useCallback(async (data: Omit<IServiceOrder, 'id'>) =>  {
    const response = await apiServiceOrder.createServiceOrder(data);

    setServiceOrders(state => [response, ...state])
  }, [serviceOrders]);

  const updateCurrentServiceOrder = useCallback((newCurrentProduct: IServiceOrder | null) => {
    setCurrentServiceOrder(newCurrentProduct)
  }, [])

  const deleteServiceOrder = useCallback(async (serviceOrderId: number) => {
    await apiServiceOrder.deleteServiceOrder(serviceOrderId)

    setServiceOrders(state => state.filter(product => product.id !== serviceOrderId))
  }, [setServiceOrders]);

  const updateServiceOrder = useCallback(async (updateServiceOrder: IServiceOrder) => {
    const response = await apiServiceOrder.updateServiceOrder(updateServiceOrder);

    const filter = serviceOrders.filter(product => product.id !== updateServiceOrder.id);

    setServiceOrders([response, ...filter]);
  }, [serviceOrders]);

  useEffect(() => {
    fetchServiceOrders();
  }, []);
  
  return (
    <ServiceOrderContext.Provider value={{
        serviceOrders, 
        currentServiceOrder, 
        updateServiceOrder, 
        updateCurrentServiceOrder, 
        fetchServiceOrders,
        createNewServiceOrder,
        deleteServiceOrder
      }}>
      {children}
    </ServiceOrderContext.Provider>
  )
}