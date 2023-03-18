import * as Dialog from '@radix-ui/react-dialog'
import { Buttons, Content, DeleteProductButton, Overlay, ProductForm } from './styles'
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import {ServicesContext} from "../../../../context/ServiceContext";

interface CreateServiceModalProps {
  closeServiceModal: () => void;
}

interface CreateServiceFormType {
  code?: string;
  name: string;
  type: string;
  price: number;
  description: string;
}

export function CreateServiceModal({ closeServiceModal } : CreateServiceModalProps) {
  const { createNewService, currentService, deleteService, updateService } = useContext(ServicesContext);
  const { register, handleSubmit, reset } = useForm<CreateServiceFormType>();

  useEffect(() => {
    if(currentService) {
      reset(currentService)
    } else {
      reset({})
    }
  }, [currentService])
  
  async function handleSubmitForm(data: any) {
    if(currentService) {
      await updateService(data)
    } else {
      await createNewService(data)
    }
    reset({});
    closeServiceModal();
  }

  async function handleDeleteProduct() {
    if(currentService) {
      await deleteService(currentService.id)
      reset();
      closeServiceModal();
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <h2>Cadastrar Novo Serviço</h2>

        <ProductForm onSubmit={handleSubmit(handleSubmitForm)}>
          <input type="text" placeholder='Codigo' {...register('code')}/>
          <input type="text" placeholder='Nome'{...register('name')}/>
          <div>
            <input type="text" placeholder='Valor' {...register('price')} />
            <input type="text" placeholder='Tipo' {...register('type')} />
          </div>
          <textarea  placeholder='Descrição' {...register('description')}/>
          <Buttons>
            <Dialog.Close>Cancelar</Dialog.Close>
            {currentService && <DeleteProductButton type="button" onClick={handleDeleteProduct}>Excluir</DeleteProductButton>}
            <button type="submit">{currentService ? 'Salvar' : 'Cadastrar'}</button>
          </Buttons>
        </ProductForm>
      </Content>
    </Dialog.Portal>
  )
}