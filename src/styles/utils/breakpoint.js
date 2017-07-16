import { css } from 'styled-components';
import { sizes } from '../theme';

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
