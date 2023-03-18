import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SearchButton, SearchFormContainer } from "./styles";
import {ServicesContext} from "../../../../context/ServiceContext";


export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const { fetchServices } = useContext(ServicesContext);

  async function handleSearchProducts(data: any) {
    fetchServices(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchProducts)}>
      <input type="text" placeholder="Buscar Serviços..." {...register('query')} />
      <SearchButton type="submit" disabled={isSubmitting }>
        <MagnifyingGlass size={20}/>
        Buscar
      </SearchButton>

    </SearchFormContainer>
)
}