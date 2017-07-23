import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Container from './';

storiesOf('Container', module).add('default', () =>
  <Container>Hello World</Container>,
);
