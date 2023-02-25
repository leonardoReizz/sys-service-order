import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../../../context/ProductsContext";
import { SearchButton, SearchFormContainer } from "./styles";


export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const { fetchProducts } = useContext(ProductsContext);

  async function handleSearchProducts(data: any) {
    fetchProducts(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchProducts)}>
      <input type="text" placeholder="Buscar produto..." {...register('query')} />
      <SearchButton type="submit" disabled={isSubmitting }>
        <MagnifyingGlass size={20}/>
        Buscar
      </SearchButton>

    </SearchFormContainer>
)
}