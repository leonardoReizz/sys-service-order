import { Plus } from "phosphor-react";
import { useCallback, useContext, useState } from "react";
import { NewProductButton, ProductsContainer, ProductsHeader, ProductsTable } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import { CreateServiceModal } from "./components/CreateServiceModal";
import {IService, ServicesContext} from "../../context/ServiceContext";
import { SearchForm } from "./components/SearchForm";

export function Services() {
  const [isOpenServiceModal, setIsOpenServiceModal] = useState<boolean>(false);
  const { services, changeCurrentService, fetchServices } = useContext(ServicesContext)
  
  const closeServiceModal = useCallback(() => {
    setIsOpenServiceModal(false);
  }, []);

  const openServiceModal = useCallback(() => {
    changeCurrentService(null)
    setIsOpenServiceModal(state => !state);
  }, [isOpenServiceModal]);

  async function handleService(service: IService) {
    changeCurrentService(service);
    setIsOpenServiceModal(true);
  }

  return (
    <ProductsContainer>
      <ProductsHeader >
        <SearchForm />
        <Dialog.Root open={isOpenServiceModal} onOpenChange={openServiceModal}>
          <Dialog.Trigger asChild>
            <NewProductButton>
              <Plus size={18} />
              Cadastrar
            </NewProductButton>
          </Dialog.Trigger>
          <CreateServiceModal closeServiceModal={closeServiceModal} />
        </Dialog.Root>
      </ProductsHeader >
      <ProductsTable >
        <thead>
          <tr>
            <th>Servico</th>
            <th>Tipo</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {
            services.map((service) => {
              return (
                <tr key={service.id} onClick={() => handleService(service)}>
                  <td>{service.name}</td>
                  <td>{service.type}</td>
                  <td>{service.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </ProductsTable >
    </ProductsContainer>
  )
}