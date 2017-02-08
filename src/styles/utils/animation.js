import { keyframes } from 'styled-components';

export const ripple = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 1;
  }

  100% {
    transform: translate(-50%, -50%) scale(2.2);
    opacity: 0;
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  20% {
    transform: scale(1.08);
  }

  30% {
    transform: scale(1.1);
  }

  60% {
    transform: scale(0.85);
  }

  100% {
    transform: scale(1);
  }
`;
