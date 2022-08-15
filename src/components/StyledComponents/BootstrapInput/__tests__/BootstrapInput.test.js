import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BootstrapInput } from '../BootstrapInput';

Enzyme.configure({ adapter: new Adapter() });

describe('BootstrapInput', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <BootstrapInput />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
