import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Rating } from '../Rating';

import { Icon } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('Rating', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <Rating />,
    );
    const expected = Wrapper.exists();
    expect(expected).toBeTruthy();
  });

  it('should have 5 Icons inside rating component', () => {
    const Wrapper = shallow(
      <Rating />,
    );
    expect(Wrapper.find(Icon)).toHaveLength(5);
  });
});
