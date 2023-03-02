import { useCallback, useContext, useState } from "react";
import { SearchForm } from "../../components/SearchForm";
import { ClientsContext } from "../../context/ClientsContext";
import { ClientsContainer, ClientsHeader, ClientsTable, NewClientButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { ClientModal } from "./components/ClientModal/ClientModal";
import { Plus } from "phosphor-react";

export function Clients() {
  const { clients, fetchClients,changeCurrentClient} = useContext(ClientsContext);
  const [isOpenClientModal, setIsOpenClientModal] = useState<boolean>(false);

  function handleClient(clientId: number) {
    changeCurrentClient(clientId)
    setIsOpenClientModal(true);
  }

  const closeClientModal = useCallback(() => {
    setIsOpenClientModal(false);
  },[])

  const openClientModal = useCallback(() => {
    changeCurrentClient(null);
    setIsOpenClientModal(state => !state);
  }, [isOpenClientModal])

  return (
    <ClientsContainer>
      <ClientsHeader>
        <SearchForm search={fetchClients} inputText="Buscar clientes..." />
        <Dialog.Root open={isOpenClientModal} onOpenChange={openClientModal}>
          <Dialog.Trigger asChild>
            <NewClientButton>
              <Plus size={18} />
              Cadastrar
            </NewClientButton>
          </Dialog.Trigger>
          <ClientModal closeClientModal={closeClientModal} />
        </Dialog.Root>
      </ClientsHeader>
      <ClientsTable >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Endereço</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {
            clients.map((client) => {
              return (
                <tr key={client.id} onClick={() => handleClient(client.id)}>
                  <td>{client.fullName}</td>
                  <td>{client.email}</td>
                  <td>{client.phoneOne || client.phoneTwo}</td>
                  <td>{client.address}</td>
                  <td>{client.city}</td>
                  <td>{client.state}</td>

                </tr>
              )
            })
          }
        </tbody>
      </ClientsTable >
    </ClientsContainer>
  )
}