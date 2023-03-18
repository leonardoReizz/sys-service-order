import { AddButton, Buttons, Content, DeleteServiceOrderButton, Overlay, ServiceOrderForm } from "./style";
import * as Dialog from '@radix-ui/react-dialog'
import { Plus } from "phosphor-react";
import {IServiceOrder} from "../../../../context/ServiceOrderContext";
import {IClient} from "../../../../context/ClientsContext";
import {IService} from "../../../../context/ServiceContext";
import {IProduct} from "../../../../context/ProductsContext";

interface ServiceOrderModalProps {
  onOpenChangeAddProductModal: (open: boolean) => void;
  onOpenChangeAddClientModal: (open: boolean) => void;
  onOpenChangeAddServiceModal: (open: boolean) => void;
  subTotalProducts: number;
  handleSubmit: any;
  register: any;
  submitForm: any;
  currentServiceOrder: IServiceOrder | null;
  selectedClient: IClient[],
  selectedServices: IService[],
  selectedProducts: IProduct[],
}

export function ServiceOrderModal({
    onOpenChangeAddProductModal,
    subTotalProducts,
    onOpenChangeAddClientModal,
    onOpenChangeAddServiceModal,
    register,
    handleSubmit,
    submitForm,
    currentServiceOrder,
    selectedClient,
    selectedServices,
    selectedProducts,
}: ServiceOrderModalProps) {


  const serviceTotal = selectedServices.reduce((acc, item) => { return acc + Number(item.price)}, 0);
  const productTotal = selectedProducts.reduce((acc, item) => acc + Number(item.priceSale), 0)
  const subTotal = serviceTotal + productTotal;
  return (
    <>
      <Overlay />
      <Dialog.Portal>
        <Content>
          <h2>Nova Ordem de Serviço</h2>
          <ServiceOrderForm onSubmit={handleSubmit(submitForm)}>
            <div>
              <input type="text" placeholder='Cliente' {...register('code')} disabled value={selectedClient[0]?.fullName}/>
              <AddButton onClick={() => onOpenChangeAddClientModal(true)} type="button">
                <Plus />
                Adicionar
              </AddButton>
            </div>
            <textarea  placeholder='Descrição' {...register('description')}/>

            <div className="total">
              <span>Total em Produtos</span>
              <input
                type="text"
                value={String(subTotalProducts)}
                disabled
                value={productTotal}
              />
                <AddButton onClick={() => onOpenChangeAddProductModal(true)} type="button">
                  <Plus />
                  Produtos
                </AddButton>
            </div>

            <div className="total">
              <span>Total em Serviços</span>
              <input
                type="text"
                value="R$ 2.000,00"
                disabled
                value={serviceTotal}
              />
              <AddButton onClick={() => onOpenChangeAddServiceModal(true)} type="button">
                <Plus /> 
                Serviços
              </AddButton> 
            </div>

            <div className="total">
              <button>Sub total</button>
              <input type="text" value={subTotal} disabled/>
            </div>
            <Buttons>
              <Dialog.Close>Cancelar</Dialog.Close>
              {currentServiceOrder && <DeleteServiceOrderButton type="button" onClick={() => {}}>Excluir</DeleteServiceOrderButton>}
              <button type="submit">{currentServiceOrder ? 'Finalizar' : 'Cadastrar'}</button>
            </Buttons>
          </ServiceOrderForm>
        </Content>
      </Dialog.Portal>
    </>
  )
}