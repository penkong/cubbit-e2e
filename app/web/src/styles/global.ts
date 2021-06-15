import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0; 
    border: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  div, button, span {
    font-family: 'Nunito', sans-serif;
  }

  body {
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`
