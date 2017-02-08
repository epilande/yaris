import styled from 'styled-components';

const Nav = styled.nav`
  ul {
    list-style: none;
    text-align: center;
  }

  li {
    margin: 0.5rem;
    display: inline-block;
  }

  .active {
    color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  }
`;

export default Nav;
