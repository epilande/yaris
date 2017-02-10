import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { ThemeProvider } from 'styled-components';

import 'sanitize.css/sanitize.css';
import theme from 'styles/theme';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));

configure(loadStories, module);
