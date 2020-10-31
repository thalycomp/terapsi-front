import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    :root {
        --verde: #02BE6E;
        --cinza:  #F0F1F8;
    }
    body {
      -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font: 14px Roboto, sans-serif;
    }
    html, body {
      width: 100%;
      height: 100%;
    }
    #root {
        margin: 0 auto;
        padding: 0;
        height: 100%;
        width: 100%;
    }
    button {
        cursor: pointer;
    }
`;
