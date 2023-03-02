import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  
  margin: 0 auto;

  input {
    width: 400px;

    border: 1px solid ${props => props.theme["gray-500"]};
    padding: 0 1rem;
    border-radius: 6px;

    line-height: 40px;
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: .5rem;

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

  svg {
    color: ${props => props.theme["yellow-300"]};
  }
`