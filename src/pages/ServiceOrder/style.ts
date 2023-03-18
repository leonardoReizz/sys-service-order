import styled from "styled-components";

export const ServiceOrderContainer = styled.div`

`

export const ServiceOrderHeader = styled.header`
  width: 100%;
  display: flex;
`

export const NewServiceOrderButton = styled.button`
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