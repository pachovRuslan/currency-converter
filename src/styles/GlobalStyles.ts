import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Segoe UI', sans-serif;
    transition: all 0.3s ease;
  }
`;