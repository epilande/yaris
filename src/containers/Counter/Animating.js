import styled from 'styled-components';
import { hexToRgba } from 'styles/utils/color';
import { ripple, pulse } from 'styles/utils/animation';
import Button from './Button';

const Animating = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
  text-align: center;

  ${Button} {
    animation: ${pulse} 0.5s ease-out forwards;

    &::before {
      background: ${props => hexToRgba(props.theme.colors.primary, 0.3)};
      animation: ${ripple} 0.8s 0.2s forwards;
    }

    &::after {
      background: ${props => hexToRgba(props.theme.colors.primary, 0.7)};
      animation: ${ripple} 0.8s 0.5s forwards;
    }
  }
`;

export default Animating;
