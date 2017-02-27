import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { hexToRgba } from '../../styles/utils/color';
import RemoveButton from './RemoveButton';

const Item = styled.li`
  padding: 1rem;
  border-bottom: 1px solid ${props => hexToRgba(props.theme.colors.dark, 0.25)};
  background: ${props => props.theme.colors.white[2]};
  color: ${props => props.theme.colors.dark};

  &:hover ${RemoveButton} {
    opacity: 1;
  }
`;

Item.defaultProps = {
  theme: {
    colors,
  },
};

export default Item;
