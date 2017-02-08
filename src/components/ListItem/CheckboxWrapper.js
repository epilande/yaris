import styled from 'styled-components';
import { hexToRgba } from 'styles/utils/color';

const CheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;

  input {
    margin-right: 1rem;
    outline: 0;
    border: 1px solid ${props => hexToRgba(props.theme.colors.dark, 0.25)};
    border-radius: 1px;
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    appearance: none;
  }

  &::after {
    content: '\\2713';
    position: absolute;
    top: -0.25rem;
    left: 0.0625rem;
    opacity: 0;
    color:  ${props => hexToRgba(props.theme.colors.dark, 0.75)};
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export default CheckboxWrapper;
