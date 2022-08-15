import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LabelValueCell } from '../LabelValueCell';

import { Rating } from '../../Rating';

Enzyme.configure({ adapter: new Adapter() });

describe('LabelValueCell', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <LabelValueCell />,
    );
    const expected = Wrapper.exists();
    expect(expected).toBeTruthy();
  });

  it('should render Rating component if component has rating prop as true', () => {
    const mockProps = {
      rating: true,
    };
    const Wrapper = shallow(
      <LabelValueCell {...mockProps}/>,
    );
    expect(Wrapper.find(Rating)).toHaveLength(1);
  });

  it('should have label as a child', () => {
    const Wrapper = shallow(
      <LabelValueCell />,
    );
    expect(Wrapper.find('label')).toHaveLength(1);
  });
});
