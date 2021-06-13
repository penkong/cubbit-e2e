import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;900&display=swap'); */
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
  div, button {
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
