import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  button:hover {
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  }
`;

export default Footer;
