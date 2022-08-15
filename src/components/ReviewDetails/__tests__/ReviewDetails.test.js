import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ReviewDetails } from '../ReviewDetails';
import { LabelValueCell } from '../../LabelValueCell';

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewDetails', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <ReviewDetails />,
    );
    const expected = Wrapper.exists();
    expect(expected).toBeTruthy();
  });

  it('should have LabelValueCell as a child', () => {
    const mockProps = {
      cards: [
        [
          {
            country: 'US',
            reviewId: 'R1SQ32067PGIK5',
            childAsin: 'B01353CVBO',
            authorId: '',
            title: 'Nice rattle sound',
            content: 'Just as cute as it can be!!! Nice rattle sound!!!',
            stars: 5,
            verified: true,
            reviewCreated: 1517961600000,
            productImg: '61YqZpvCyaL',
            productTitle: 'Bearington Baby Lil\' Spout Plush Elephant Shaker Rattle, 5"',
            watched: false,
            created: 1518038627000
          }
        ],
      ],
    };
    const Wrapper = shallow(
      <ReviewDetails {...mockProps}/>,
    );
    expect(Wrapper.find(LabelValueCell)).toHaveLength(3);
  });
});
