import styled from 'styled-components';
import { hexToRgba } from 'styles/utils/color';

const InputContainer = styled.div`
  position: relative;
  background: ${props => hexToRgba(props.theme.colors.white[0], 0.2)};
  padding: 1rem;
`;

export default InputContainer;
