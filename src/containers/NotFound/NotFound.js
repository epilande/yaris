import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
  text-align: center;
`;

const H2 = styled.h2`
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
`;

const NotFound = () => (
  <Base>
    <H2>Page Not Found!</H2>
  </Base>
);

export default NotFound;
