import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ClientsContext, IClient } from '../../../../context/ClientsContext';
import { AddressContainer, Buttons, ClientForm, Content, DeleteClientButton, Overlay } from './styles';

interface ClientModalProps {
  closeClientModal: () => void;
}

export function ClientModal({ closeClientModal }: ClientModalProps) {
  const { currentClient, createNewClient, updateClient, deleteClient } = useContext(ClientsContext);
  const { register, handleSubmit, reset } = useForm<Omit<IClient, 'id'>>();

  async function handleSubmitForm(data: Omit<IClient, 'id'>) {
    if(currentClient) {
      await updateClient({id: currentClient.id, ...data})
    } else {
      await createNewClient(data)
    }
    closeClientModal();
    reset({});
  }
  
  async function handleDeleteClient() {
    if(currentClient) {
      await deleteClient(currentClient?.id);
      closeClientModal();
      reset({});
    }
  }

  useEffect(() => {
    if(currentClient) {
      reset(currentClient)
    } else {
      reset({})
    }
  }, [currentClient])

  return (
    <Dialog.Portal>
      <Overlay/>
      <Content>
        <h2>Cadastrar Novo Cliente</h2>
        <ClientForm onSubmit={handleSubmit(handleSubmitForm)}>
          <input type="text" placeholder='Nome' {...register('fullName')}/>
          <div>
            <input type="text" placeholder='Email' {...register('email')} />
            <input type="text" placeholder='CPF/CNPJ' {...register('cpf')} />
          </div>
          <div> 
            <input type="text" placeholder='Telefone 1' {...register('phoneOne')} />
            <input type="text" placeholder='Telefone 2' {...register('phoneTwo')} />
          </div>
          <AddressContainer >
            <input  placeholder='Endereço' {...register('address')}/>
            <div>
              <input  placeholder='Cidade' {...register('city')}/>
              <input  placeholder='Estado' {...register('state')}/>
            </div>
            <div>
              <input  placeholder='Pais' {...register('country')}/>
              <input  placeholder='CEP' {...register('postalCode')}/>
            </div>
          </AddressContainer>
          <Buttons>
            <Dialog.Close>Cancelar</Dialog.Close>
            {currentClient && <DeleteClientButton type="button" onClick={handleDeleteClient}>Excluir</DeleteClientButton>}
            <button type="submit">{currentClient ? 'Salvar' : 'Cadastrar'}</button>
          </Buttons>
        </ClientForm>
      </Content>
    </Dialog.Portal>
  )
}