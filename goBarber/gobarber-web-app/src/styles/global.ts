import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: 0px;
    outline: 0px;
  }
  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', 'serif';
    font-size: 16px;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }


`
