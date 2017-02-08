import styled from 'styled-components';
import { hexToRgba } from 'styles/utils/color';

const Actions = styled.div`
  button {
    margin: 0.5rem;
    padding: 0.25rem 0.8rem;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 2px;
    color: ${props => props.theme.colors.primary};
    font-weight: 300;

    &:hover {
      background: ${props => hexToRgba(props.theme.colors.primary, 0.1)};
    }
  }
`;

export default Actions;
