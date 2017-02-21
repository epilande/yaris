import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { hexToRgba } from '../../styles/utils/color';

const InputContainer = styled.div`
  position: relative;
  background: ${props => hexToRgba(props.theme.colors.white[0], 0.2)};
  padding: 1rem;
`;

InputContainer.defaultProps = {
  theme: {
    colors,
  },
};

export default InputContainer;
