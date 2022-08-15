import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from '@material-ui/core/Icon';
import { CheckBoxGroup } from '../CheckBoxGroup';

Enzyme.configure({ adapter: new Adapter() });

describe('CheckBoxGroup', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <CheckBoxGroup />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });

  it('should have 5 Icons in CheckBoxGroup', () => {
    const Wrapper = shallow(
      <CheckBoxGroup />,
    );
    expect(Wrapper.find(Icon)).toHaveLength(1);
  });

  it('should have 5 labels in CheckBoxGroup', () => {
    const Wrapper = shallow(
      <CheckBoxGroup />,
    );
    expect(Wrapper.find('label')).toHaveLength(1);
  });
});
