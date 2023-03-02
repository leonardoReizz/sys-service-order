import { SearchForm } from "../../components/SearchForm";
import { NewServiceOrderButton, ServiceOrderContainer, ServiceOrderHeader } from "./style";
import * as Dialog from '@radix-ui/react-dialog';
import { useCallback, useState } from "react";
import { Plus } from "phosphor-react";
import { ServiceOrderModal } from "./components/ServiceOrderModal";

export function ServiceOrder() {
  const [isOpenServiceOrderModal, setIsOpenServiceOrderModal] = useState<boolean>(false);
  async function search(q?: string) {

  }

  const openServiceOrderModal = useCallback(() => {
    setIsOpenServiceOrderModal(true);
  }, []);

  const closeServiceOrderModal = useCallback(() => {
    setIsOpenServiceOrderModal(false);
  },[])
  
  return (
    <ServiceOrderContainer>
      <ServiceOrderHeader>
        <SearchForm inputText="Buscar ordem de serviço..." search={search}/>
        <Dialog.Root open={isOpenServiceOrderModal} onOpenChange={openServiceOrderModal}>
          <Dialog.Trigger asChild>
            <NewServiceOrderButton>
              <Plus size={18} />
              Cadastrar
            </NewServiceOrderButton>
          </Dialog.Trigger>
          <ServiceOrderModal closeServiceOrderModal={closeServiceOrderModal} />
        </Dialog.Root>
      </ServiceOrderHeader>
    </ServiceOrderContainer>
  );  
}