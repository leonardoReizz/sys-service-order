import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../context/ProductsContext";
import { SearchButton, SearchFormContainer } from "./styles";

interface SearchFormProps {
  search: (query?: string) => Promise<void>;
  inputText: string;
}


export function SearchForm({search, inputText}: SearchFormProps) {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  async function handleSearchProducts(data: any) {
    search(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchProducts)}>
      <input type="text" placeholder={inputText} {...register('query')} />
      <SearchButton type="submit" disabled={isSubmitting }>
        <MagnifyingGlass size={20}/>
        Buscar
      </SearchButton>
    </SearchFormContainer>
  )
}