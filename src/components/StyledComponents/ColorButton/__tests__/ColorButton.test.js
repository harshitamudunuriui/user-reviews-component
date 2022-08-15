import React from 'react';
import { ColorButton } from '../ColorButton';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ColorButton', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <ColorButton />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
