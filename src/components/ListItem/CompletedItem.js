import styled from 'styled-components';
import { hexToRgba } from 'styles/utils/color';
import RemoveButton from './RemoveButton';
import DisplayText from './DisplayText';
import CheckboxWrapper from './CheckboxWrapper';

const CompletedItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${props => hexToRgba(props.theme.colors.dark, 0.25)};
  background: ${props => props.theme.colors.white[2]};
  color: ${props => props.theme.colors.dark};

  &:hover ${RemoveButton} {
    opacity: 1;
  }

  ${DisplayText} {
    text-decoration: line-through;
    opacity: 0.5;
  }

  ${CheckboxWrapper} {
    input {
      border-color: ${props => hexToRgba(props.theme.colors.dark, 0.4)}
    }

    &::after {
      opacity: 1;
    }
  }
`;

export default CompletedItem;
