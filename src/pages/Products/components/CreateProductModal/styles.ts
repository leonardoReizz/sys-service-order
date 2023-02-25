import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  height: 100vh;
  width: 100vw;
  
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  width: 800px;
  background: ${props => props.theme.white};
  border-radius: 6px;
  
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1rem 2rem;

  h2 {
    text-align: center;
  }
`

export const ProductForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: .5rem;
  margin-top: 4rem;

  div {
    display: flex;
    width: 100%;
    gap: .5rem;
  }

  input, textarea {
    width: 100%;
    padding: .5rem .5rem;

    border: 1px solid ${props => props.theme['gray-500']};
    border-radius: 6px;

    resize: none;
  }

  textarea {
    min-height: 100px;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: .5rem;
  margin: 2rem 0;

  display: flex;
  justify-content: center;

  button {
    color: ${props => props.theme.white};
    padding: .8rem 3rem;
    border-radius: 6px;

    &:hover {
      transition: background-color 0.2s;
    }

    &:first-child {
      background: ${props => props.theme['red-300']};

      &:hover {
        background: ${props => props.theme['red-500']}
      }
    }

    &:last-child {
      background: ${props => props.theme['green-300']};

      &:hover {
        background: ${props => props.theme['green-500']}
      }
    }
  }
`

export const DeleteProductButton = styled.button `
  background: ${props => props.theme['red-300']};

  &:hover {
    background: ${props => props.theme['red-500']}
  }
`