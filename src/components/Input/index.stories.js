import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from './';

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('placeholder', () => (
    <Input placeholder="Hello World" />
  ));
