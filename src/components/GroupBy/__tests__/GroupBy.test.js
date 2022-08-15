import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NativeSelect } from '@material-ui/core';
import { GroupBy } from '../GroupBy';

Enzyme.configure({ adapter: new Adapter() });

describe('GroupBy', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <GroupBy />,
    );
    const expected = Wrapper.exists();
    expect(expected).toBeTruthy();
  });

  it('should have NativeSelect as a child', () => {
    const Wrapper = shallow(
      <GroupBy />,
    );
    expect(Wrapper.find(NativeSelect)).toHaveLength(1);
  });
});
