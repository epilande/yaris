import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
  ${props => props.center && 'text-align: center'};
`;

export default Container;
