import styled from 'styled-components';
import { colors } from '../../styles/theme';

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 2.2rem 0.5rem 1rem;
  font-size: 1.125rem;
  background: ${props => props.theme.colors.white[2]};
  outline: 0;
  border: 1px solid transparent;
  border-radius: 2px;

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`;

Input.defaultProps = {
  theme: {
    colors,
  },
};

export default Input;
