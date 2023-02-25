import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import * as apiProduct from "../services/http/products";

export interface IProduct {
  id: number;
  code?: string;
  name: string;
  pricePurchase: number;
  priceSale: number;
  stock: number;
  description?: string;
}

interface ProductsContextType {
  products: IProduct[];
  currentProduct: IProduct | null;
  createNewProduct: (newProducts: Omit<IProduct,'id'>) => Promise<void>;
  changeCurrentProduct: (newCurrentProduct: IProduct | null) => void;
  fetchProducts: (query?: string) => Promise<void>;
  deleteProduct: (productId: number) => Promise<void>;
}

interface ProductsContextProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsContextProvider({children}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<IProduct[]>([])
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);

  async function fetchProducts(query?: string) {
    const list = await apiProduct.listProducts(query);
    setProducts(list)
  }

  const createNewProduct = useCallback(async (data: Omit<IProduct, 'id'>) =>  {
    const response = await apiProduct.createProduct(data);

    setProducts(state => [response, ...state])
  },[products]);

  const changeCurrentProduct = useCallback((newCurrentProduct: IProduct | null) => {
    setCurrentProduct(newCurrentProduct)
  },[])

  const deleteProduct = useCallback(async (productId: number) => {
    await apiProduct.deleteProduct(productId)

    setProducts(state => state.filter(product => product.id !== productId))
  }, [products])

  useEffect(() => {
    fetchProducts();
  },[ ]);
  
  return (
    <ProductsContext.Provider value={{products, currentProduct, fetchProducts, createNewProduct, changeCurrentProduct ,deleteProduct}}>
      {children}
    </ProductsContext.Provider>
  )
}