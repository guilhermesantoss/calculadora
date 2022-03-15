import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'RobotoMono', monospace;
  }

  body {
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
    -webkit-font-smoothing: antialiased;
    display: flex;
    height: 100vh;
    justify-content: center; /* alinhar no main axis*/
    align-items: center; /* alinhar no cross axis*/
    text-align: center;
    color: #fff;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  :root {
    --bg-button: #f0f0f0;
    --border-button: 1px solid #888;
  }
`;
