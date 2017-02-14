import React from 'react';
import { shallow } from 'enzyme';
import Container from '../index';

describe('<Container />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Container />,
    );
  });

  it('should render a Container', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render a div', () => {
    expect(component.find('div')).toHaveLength(1);
  });
});
