import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { hexToRgba } from '../../styles/utils/color';

const Example = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  width: 100%;
  height: calc(100vh - 250px);
  background: ${props => props.theme.colors.dark};
  box-shadow: 0 1rem 2.5rem 0 ${props => hexToRgba(props.theme.colors.black, 0.2)};
`;

Example.defaultProps = {
  theme: {
    colors,
  },
};

export default Example;
