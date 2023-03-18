import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, SubTotal, TableProducts } from './style'
import {IProduct} from "../../../../context/ProductsContext";

interface ProductModalProps {
  onOpenChangeAddProductModal: (open: boolean) => void;
  products: IProduct[];
  selectedProducts: any[];
  selectProduct: (product: IProduct) => void;
}
export function AddProductModal({onOpenChangeAddProductModal, products, selectProduct, selectedProducts}: ProductModalProps) {
  return (
    <>
      <Overlay />
      <Dialog.Portal>
        <Content>
          <TableProducts>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th>QTD Estoque</th>
                <th>Adicionar/Remover</th>
              </tr>
            </thead>
            <tbody>
            {
              products.map((product) => {
                return (
                  <tr className={selectedProducts.filter((selected: any) => selected.id === product.id).length ? 'selected' : ''}>
                    <td>{product.name}</td>
                    <td>R${product.priceSale}</td>
                    <td>{product.stock}</td>
                    <td><button onClick={() => selectProduct(product)}>{
                      selectedProducts.filter((selected: any) => selected.id === product.id).length ?  '- Remover': '+ Adicionar'
                    }</button></td>
                  </tr>
                )
              })
            }
            </tbody>
          </TableProducts>
          <SubTotal>
            SubTotal: R$ {selectedProducts.reduce((acc, item) => {return acc + Number(item.priceSale)}, 0)}
          </SubTotal>
        </Content>
      </Dialog.Portal>
    </>
  )
}