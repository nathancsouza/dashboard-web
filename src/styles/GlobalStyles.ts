import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  body {
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  *, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    border: 0;
    background: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  html {
    background: var(--primary);
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary: #1e1e2e;
    --secondary: #27293d;
    --sidebar: #da4fd1;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --green: #00C06B;
    --like: #E8265E;
    --text: #39a8dd;
    --transparent: transparent;
  }
`;
