import { injectGlobal } from 'styled-components';
import { media } from './utils/breakpoint';
import { colors, fonts } from './theme';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    background: ${colors.gradient[1]};
    font-size: 12px;

    ${media.small`
      font-size: 14px;
    `}

    ${media.large`
      font-size: 16px;
    `}
  }

  ::selection {
    background: ${colors.primary};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: ${fonts.base};
    background: linear-gradient(to bottom, ${colors.gradient[0]} 0%, ${colors.gradient[1]} 100%);
    color: ${colors.white};
    overflow-y: hidden;
    letter-spacing: 0.1rem;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  h1 {
    color: ${colors.white};
    font-weight: 400;
    font-size: 2.5rem;
    letter-spacing: 0.25rem;
  }

  input {
    color: ${colors.dark};
  }

  a {
    text-decoration: none;
    color: ${colors.white};

    &:hover,
    &:global(.active) {
      border-bottom: 1px solid ${colors.primary};
    }

    &:global(.active) {
      color: ${colors.primary};
    }
  }
`;
