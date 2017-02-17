import { css } from 'styled-components';

const sizes = {
  xlarge: 1280,
  large: 1024,
  medium: 768,
  small: 568,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  const accumulator = acc;
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default {
  media,
};
