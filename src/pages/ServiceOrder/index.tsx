import { SearchForm } from "../../components/SearchForm";
import { NewServiceOrderButton, ServiceOrderContainer, ServiceOrderHeader } from "./style";
import * as Dialog from '@radix-ui/react-dialog';
import { Plus } from "phosphor-react";
import { ServiceOrderModal } from "./components/ServiceOrderModal";
import { useServiceOrder } from "../../hooks/useServiceOrder/useServiceOrder";
import  {AddProductModal } from "./components/AddProductModal";
import { AddServiceModal } from "./components/AddServiceModal";
import { AddClientModal } from "./components/AddClientModal";
import {ProductsTable} from "../Products/styles";

export function ServiceOrder() {
  const {
    isOpenServiceOrderModal,
    search,
    onOpenChangeServiceModal,
    onOpenChangeAddProductModal,
    selectedProducts,
    isOpenAddProductModal,
    products,
    selectProduct,
    subTotalProducts,
    onOpenChangeAddServiceModal,
    selectService,
    selectedServices,
    onOpenChangeAddClientModal,
    selectClient,
    selectedClients,
    isOpenAddClientModal,
    clients,
    isOpenAddServiceModal,
    handleSubmit,
    register,
    submitForm,
    currentServiceOrder,
    services,
    serviceOrders
  } = useServiceOrder();
  
  return (
    <ServiceOrderContainer>
      <ServiceOrderHeader>
        <SearchForm inputText="Buscar ordem de serviço..." search={search}/>
        <Dialog.Root open={isOpenServiceOrderModal} onOpenChange={onOpenChangeServiceModal}>
          <Dialog.Trigger asChild>
            <NewServiceOrderButton>
              <Plus size={18} />
              Cadastrar
            </NewServiceOrderButton>
          </Dialog.Trigger>
          <ServiceOrderModal
            onOpenChangeAddClientModal={onOpenChangeAddClientModal}
            onOpenChangeAddProductModal={onOpenChangeAddProductModal}
            onOpenChangeAddServiceModal={onOpenChangeAddServiceModal}
            subTotalProducts={subTotalProducts}
            handleSubmit={handleSubmit}
            register={register}
            currentServiceOrder={currentServiceOrder}
            submitForm={submitForm}
            selectedServices={selectedServices}
            selectedProducts={selectedProducts}
            selectedClient={selectedClients}
          />
        </Dialog.Root>

        <Dialog.Root open={isOpenAddProductModal} onOpenChange={onOpenChangeAddProductModal}>
          <AddProductModal
            onOpenChangeAddProductModal={onOpenChangeAddProductModal}
            products={products}
            selectProduct={selectProduct}
            selectedProducts={selectedProducts}
          />
        </Dialog.Root>

        <Dialog.Root open={isOpenAddServiceModal} onOpenChange={onOpenChangeAddServiceModal}>
          <AddServiceModal
            onOpenChangeAddServiceModal={onOpenChangeAddServiceModal}
            selectService={selectService}
            selectedServices={selectedServices}
            services={services}
          />
        </Dialog.Root>

        <Dialog.Root open={isOpenAddClientModal} onOpenChange={onOpenChangeAddClientModal}>
          <AddClientModal
            onOpenChangeAddClientModal={onOpenChangeAddClientModal}
            selectClient={selectClient}
            selectedClients={selectedClients}
            clients={clients}
          />
        </Dialog.Root>
      </ServiceOrderHeader>


      <ProductsTable >
        <thead>
        <tr>
          <th>Cliente</th>
          <th>Descricao</th>
          <th>Total Serviços</th>
          <th>Total Produtos</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
        {
          serviceOrders.map((service) => {
            return (
              <tr key={service.id} onClick={() => {}}>
                <td>{service?.user.fullName}</td>
                <td>{service.description}</td>
                <td>{service.totalServices}</td>
                <td>{service.totalProducts}</td>
                <td>{service.total}</td>
              </tr>
            )
          })
        }
        </tbody>
      </ProductsTable >
    </ServiceOrderContainer>
  );  
}