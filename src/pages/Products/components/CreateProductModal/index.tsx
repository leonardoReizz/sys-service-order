import * as Dialog from '@radix-ui/react-dialog'
import { Buttons, Content, DeleteProductButton, Overlay, ProductForm } from './styles'
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../../../context/ProductsContext';

interface CreateProductModalProps {
  closeProductModal: () => void;
}

interface CreateProductFormType {
  code?: string;
  name: string;
  pricePurchase: number;
  priceSale: number;
  stock: number;
  description?: string;
}

export function CreateProductModal({ closeProductModal } : CreateProductModalProps) {
  const { createNewProduct, currentProduct, deleteProduct } = useContext(ProductsContext);
  const { register, handleSubmit, reset } = useForm<CreateProductFormType>();

  useEffect(() => {
    if(currentProduct) {
      reset(currentProduct)
    } else {
      reset({})
    }
  }, [currentProduct])
  
  async function handleSubmitForm(data: any) {
    if(currentProduct) {

    } else {
      await createNewProduct(data)
    }
    reset();
    closeProductModal();
  }

  async function handleDeleteProduct() {
    if(currentProduct) {
      await deleteProduct(currentProduct.id)
      reset();
      closeProductModal();
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <h2>Cadastrar Novo Produto</h2>

        <ProductForm onSubmit={handleSubmit(handleSubmitForm)}>
          <input type="text" placeholder='Codigo' {...register('code')}/>
          <input type="text" placeholder='Nome'{...register('name')}/>
          <div>
            <input type="text" placeholder='Valor de Compra' {...register('priceSale')} />
            <input type="text" placeholder='Valor de Venda' {...register('pricePurchase')} />
            <input type="text" placeholder='Total em estoque' {...register('stock')} />
          </div>
          <textarea  placeholder='Descrição' {...register('description')}/>
          <Buttons>
            <Dialog.Close>Cancelar</Dialog.Close>
            {currentProduct && <DeleteProductButton type="button" onClick={handleDeleteProduct}>Excluir</DeleteProductButton>}
            <button type="submit">{currentProduct ? 'Salvar' : 'Cadastrar'}</button>
          </Buttons>
        </ProductForm>
      </Content>
    </Dialog.Portal>
  )
}