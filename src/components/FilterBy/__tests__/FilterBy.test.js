import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FilterBy } from '../FilterBy';
import { CheckBoxGroup } from '../../CheckBoxGroup';

Enzyme.configure({ adapter: new Adapter() });

describe('FilterBy', () => {
  const mockProps = {
    handleCheckBoxChange: () => {},
  };
  it('should render component', () => {
    const Wrapper = shallow(
      <FilterBy {...mockProps}/>,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });

  it('should have 5 CheckBoxGroup in FilterBy', () => {
    const Wrapper = shallow(
      <FilterBy {...mockProps}/>,
    );
    expect(Wrapper.find(CheckBoxGroup)).toHaveLength(5);
  });
});
