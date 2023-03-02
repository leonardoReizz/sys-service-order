import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'UntitledSans';
    src: url("./src/styles/fonts/UntitledSans-Regular.otf") format("opentype");
  }

  @font-face {
    font-family: 'UntitledSans';
    font-weight: 700;
    src: url("./src/styles/fonts/UntitledSans-Bold.otf") format("opentype");
  }

  @font-face {
    font-family: 'UntitledSans';
    font-weight: 500;
    src: url("./src/styles/fonts/UntitledSans-Medium.otf") format("opentype");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font: 400 .9rem 'UntitledSans', sans-serif;
  }

  h1,h2,h3,h4,h5 {
    font-family: 'Roboto', sans-serif;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-300']};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }

  input {
    outline: 0;
    border: 0;
  }
`