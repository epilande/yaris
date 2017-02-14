import styled from 'styled-components';

const RemoveButton = styled.button`
  opacity: 0;
  float: right;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary};
    font-weight: 600;
  }
`;

export default RemoveButton;
