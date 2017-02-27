import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { hexToRgba } from '../../styles/utils/color';

const Button = styled.button`
  margin: 0.5rem;
  padding: 0.25rem 0.8rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 2px;
  color: ${props => props.theme.colors.primary};
  font-weight: 300;

  &:hover {
    background: ${props => hexToRgba(props.theme.colors.primary, 0.1)};
  }
`;

Button.defaultProps = {
  theme: {
    colors,
  },
};

export default Button;
