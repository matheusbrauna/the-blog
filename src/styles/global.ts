import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors['brand-dark']};
    color: ${({ theme }) => theme.colors.white};
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  ul, li {
    list-style: none;
    color: ${({ theme }) => theme.colors.white};
  }

  img{
    display: block;
    max-width: 100%;
  }
`
