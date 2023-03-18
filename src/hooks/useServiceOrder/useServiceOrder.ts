import {useCallback, useContext, useState} from "react";
import {IProduct, ProductsContext} from "../../context/ProductsContext";
import {ClientsContext} from "../../context/ClientsContext";
import {useForm} from "react-hook-form";
import {IService, ServicesContext} from "../../context/ServiceContext";
import {ServiceOrderContext} from "../../context/ServiceOrderContext";

export function useServiceOrder () {
  const { register, handleSubmit } = useForm();
  const products = useContext(ProductsContext);
  const clients = useContext(ClientsContext);
  const servicesOrder = useContext(ServiceOrderContext);
  const services = useContext(ServicesContext);

  const [isOpenServiceOrderModal, setIsOpenServiceOrderModal] = useState<boolean>(false);
  const [isOpenAddProductModal, setIsOpenAddProductModal] = useState<boolean>(false);
  const [isOpenAddServiceModal, setIsOpenAddServiceModal] = useState<boolean>(false);
  const [isOpenAddClientModal, setIsOpenAddClientModal] = useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedClients, setSelectedClients] = useState<any[]>([]);

  const [selectedServices, setSelectedServices] = useState<any[]>([]);

  async function search(q?: string) {

  }

  const subTotalProducts = selectedProducts.reduce((acc, item) => {return acc + Number(item.priceSale)}, 0)

  const onOpenChangeServiceModal = useCallback((open: boolean) => {
    setIsOpenServiceOrderModal(open);
  }, []);

  const submitForm = useCallback(async (values: any) => {
    console.log('create')

    const serviceTotal = selectedServices.reduce((acc, item) => { return acc + Number(item.price)}, 0);
    const productTotal = selectedProducts.reduce((acc, item) => acc + Number(item.priceSale), 0)
    const subTotal = serviceTotal + productTotal;

    await servicesOrder.createNewServiceOrder({
      products: selectedProducts,
      services: selectedServices,
      user: selectedClients[0],
      description: values.description,
      totalServices: serviceTotal,
      totalProducts: productTotal,
      total: subTotal
    })

    onOpenChangeServiceModal(false);
    setSelectedClients([]);
    setSelectedServices([]);
    setSelectedProducts([]);
  },[selectedClients, selectedServices, selectedProducts])

  const onOpenChangeAddProductModal = useCallback((open: boolean) => {
    setIsOpenAddProductModal(open);
  }, []);

  const onOpenChangeAddServiceModal = useCallback((open: boolean) => {
    setIsOpenAddServiceModal(open);
  }, []);

  const onOpenChangeAddClientModal = useCallback((open: boolean) => {
    setIsOpenAddClientModal(open);
  }, []);

  const updateSelectedProducts = useCallback((newSelectedProducts: any[]) => {
    setSelectedProducts(newSelectedProducts)
  },[])

  const selectProduct = useCallback((product: IProduct) => {
    if(selectedProducts.filter((selected) => selected.id === product.id).length) {
      return setSelectedProducts((state) => state.filter((selected) => selected.id !== product.id));
    }
    return setSelectedProducts((state) => [...state, product])
  },[selectedProducts]);

  const selectService = useCallback((service: IService) => {
    if(selectedServices.filter((selected) => selected.id === service.id).length) {
      return setSelectedServices((state) => state.filter((selected) => selected.id !== service.id));
    }
    return setSelectedServices((state) => [...state, service])
  },[selectedServices]);

  const selectClient = useCallback((client: any) => {
    if(selectedClients.filter((selected) => selected.id === client.id).length) {
      return setSelectedClients([]);
    }
    return setSelectedClients([client]);
  },[selectedClients]);

  return {
    ...products,
    ...clients,
    ...servicesOrder,
    ...services,
    search,
    isOpenServiceOrderModal,
    isOpenAddProductModal,
    isOpenAddServiceModal,
    isOpenAddClientModal,
    onOpenChangeServiceModal,
    onOpenChangeAddClientModal,
    onOpenChangeAddProductModal,
    onOpenChangeAddServiceModal,
    subTotalProducts,
    updateSelectedProducts,
    selectedProducts,
    selectProduct,
    selectedServices,
    selectService,
    selectedClients,
    selectClient,
    register,
    handleSubmit,
    submitForm,
  }
}