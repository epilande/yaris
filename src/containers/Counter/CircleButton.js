import styled from 'styled-components';
import { colors } from '../../styles/theme';

const CircleButton = styled.button`
  position: relative;
  display: inline-block;
  width: 5.5rem;
  height: 5.5rem;
  margin-top: 3rem;
  margin-bottom: 3.5rem;
  font-size: 2rem;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};

  span {
    position: relative;
    z-index: 1;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.5);
  }
`;

CircleButton.defaultProps = {
  theme: {
    colors,
  },
};

export default CircleButton;
