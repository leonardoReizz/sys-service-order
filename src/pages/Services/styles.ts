import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
`

export const ProductsHeader = styled.header`
  width: 100%;

  display: flex;
  justify-content:center;
  align-items: center;
  gap: .5rem;

`

export const ProductsTable = styled.table`
  width: 100%;
  text-align: center;

  border-collapse: separate;
  border-spacing: 0 0.25rem;

  margin-top: 2rem;

   td {
    padding: .5rem .5rem;
  } 

  tbody {
    tr {
      background: ${props => props.theme["gray-100"]};
      cursor: pointer;
      &:hover {
        background: ${props => props.theme["gray-300"]}
      }
    }
  }
`

export const NewProductButton = styled.button `
  display: flex;
  align-items: center;
  gap: .5rem;

  position: absolute;
  right: 1.5rem;
  top: 1rem;

  line-height: 40px;
  padding: 0 1rem;
  border-radius: 6px;
  border: 2px solid ${props => props.theme["yellow-300"]};

  &:hover {
    background: ${props => props.theme["yellow-300"]};
    transition: background-color 0.2s;

    color: ${props => props.theme.white};

    svg {
      color: ${props => props.theme.white};
      transition: background-color 0.2s;
    }
  }
`