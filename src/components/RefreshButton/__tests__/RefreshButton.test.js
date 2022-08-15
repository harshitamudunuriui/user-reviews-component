
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RefreshButton } from '../RefreshButton';

Enzyme.configure({ adapter: new Adapter() });

describe('RefreshButton', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <RefreshButton />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
