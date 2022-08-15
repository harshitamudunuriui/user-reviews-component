import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GroupAndOrderBy } from '../GroupAndOrderBy';
import { GroupByContainer } from '../../../containers/GroupByContainer';
import { OrderByContainer } from '../../../containers/OrderByContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('GroupAndOrderBy', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <GroupAndOrderBy />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });

  it('should have GroupByContainer as a child', () => {
    const Wrapper = shallow(
      <GroupAndOrderBy />,
    );
    expect(Wrapper.find(GroupByContainer)).toHaveLength(1);
  });

  it('should have OrderByContainer as a child', () => {
    const Wrapper = shallow(
      <GroupAndOrderBy />,
    );
    expect(Wrapper.find(OrderByContainer)).toHaveLength(1);
  });
});
