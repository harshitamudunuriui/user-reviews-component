import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { OrderBy } from '../OrderBy';
import { NativeSelect } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('OrderBy', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <OrderBy />,
    );
    const expected = Wrapper.exists();
    expect(expected).toBeTruthy();
  });

  it('should have NativeSelect as a child', () => {
    const Wrapper = shallow(
      <OrderBy />,
    );
    expect(Wrapper.find(NativeSelect)).toHaveLength(1);
  });
});
