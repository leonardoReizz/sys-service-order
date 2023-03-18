import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  height: 100vh;
  width: 100vw;

  position: fixed;
  inset: 0;
`
export const Content = styled(Dialog.Content)`
  width: 850px;
  height: 600px;
  background: ${props => props.theme.white};
  border-radius: 6px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1rem 2rem;

  h2 {
    margin-top: 2rem;
    text-align: center;
  }

`

export const TableClients = styled.table`
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
  
  .selected {
    background-color: ${props => props.theme['green-300']}
  } 
`
