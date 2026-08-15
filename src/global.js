import { createGlobalStyle } from "styled-components";
import portfolioBg from "./assets/images/portfolio-bg.png";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before { box-sizing: border-box; }

  body {
    background-color: #f5f6ff;
    background-image: url(${portfolioBg});
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  #root { position: relative; z-index: 1; }
  a { transition: color 0.2s ease; }

  ::selection {
    background: rgba(37,99,235,0.2);
    color: #1a2b4a;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #f0f4ff; }
  ::-webkit-scrollbar-thumb { background: rgba(37,99,235,0.3); border-radius: 3px; }
`;
