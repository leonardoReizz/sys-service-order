import { Plus } from "phosphor-react";
import { useCallback, useContext, useEffect, useState } from "react";
import { NewProductButton, ProductsContainer, ProductsHeader, ProductsTable } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import { CreateProductModal } from "./components/CreateProductModal";
import { SearchForm } from "../../components/SearchForm";
import { IProduct, ProductsContext } from "../../context/ProductsContext";

export function Products() {
  const [isOpenProductModal, setOpenProductModal] = useState<boolean>(false);
  const { products, changeCurrentProduct, fetchProducts } = useContext(ProductsContext)
  
  const closeProductModal = useCallback(() => {
    setOpenProductModal(false);
  }, []);

  const openProductModal = useCallback(() => {
    changeCurrentProduct(null)
    setOpenProductModal(state => !state);
  }, [isOpenProductModal]);

  async function handleProduct(product: IProduct) {
    changeCurrentProduct(product);
    setOpenProductModal(true);
  }

  return (
    <ProductsContainer>
      <ProductsHeader >
        <SearchForm search={fetchProducts} inputText="Buscar produtos..." />
        <Dialog.Root open={isOpenProductModal} onOpenChange={openProductModal}>
          <Dialog.Trigger asChild>
            <NewProductButton>
              <Plus size={18} />
              Cadastrar
            </NewProductButton>
          </Dialog.Trigger>
          <CreateProductModal closeProductModal={closeProductModal} />
        </Dialog.Root>
      </ProductsHeader >
      <ProductsTable >
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Produto</th>
            <th>Preço</th>
            <th>QTD Estoque</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => {
              return (
                <tr key={product.id} onClick={() => handleProduct(product)}>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.priceSale}</td>
                  <td>{product.stock}</td>
                </tr>
              )
            })
          }
        </tbody>
      </ProductsTable >
    </ProductsContainer>
  )
}