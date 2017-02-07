import { injectGlobal } from 'styled-components';
import { media } from './utils/breakpoint';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    background: #312c47;
    font-size: 12px;

    ${media.small`
      font-size: 14px;
    `}

    ${media.large`
      font-size: 16px;
    `}
  }

  ::selection {
    background: #75d2d3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: "Avenir Next", Avenir, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    background: linear-gradient(to bottom, #282140 0%, #312c47 100%);
    color: #f6f4f9;
    overflow-y: hidden;
    letter-spacing: 0.1rem;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  h1 {
    color: #f6f4f9;
    font-weight: 400;
    font-size: 2.5rem;
    letter-spacing: 0.25rem;
  }

  input {
    color: #433a5a;
  }

  a {
    text-decoration: none;
    color: #f6f4f9;

    &:hover,
    &:global(.active) {
      border-bottom: 1px solid #75d2d3;
    }

    &:global(.active) {
      color: #75d2d3;
    }
  }
`;
