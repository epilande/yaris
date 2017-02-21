import styled from 'styled-components';
import { colors } from '../../styles/theme';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  button:hover {
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  }
`;

Footer.defaultProps = {
  theme: {
    colors,
  },
};

export default Footer;
