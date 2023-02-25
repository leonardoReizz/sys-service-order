import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 200px;

  background: ${props => props.theme["gray-700"]};
  color: ${props => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;

  header {
    width: 100%;
    position: absolute;
    top: 1rem;
    h2 {
      margin-top: 1rem;
      max-width: 40px;
      margin: 0 auto;
    }
  }

  ul {
    width: 100%;
    li {
      width: 100%;
      a {
        
        width: 200px;
        display: block;
        line-height: 50px;
        color: ${props => props.theme.white};

        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .5rem;

        &:hover {
          background: ${props => props.theme["gray-600"]}
        }

        svg {
          margin-left: .5rem;
          font-size: 1.1rem;
        }
      }

    }
  }
`


export const Footer = styled.footer `
  position: absolute;
  bottom: 0;
  width: 100%;

  button {
    width: 100%;
    height: 50px;
    color: ${props => props.theme.white};
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;

    svg {
      margin-left: .5rem;
      font-size: 1.1rem;
    }

    &:hover {
      background: ${props => props.theme["gray-600"]}
    }

  }
  
`