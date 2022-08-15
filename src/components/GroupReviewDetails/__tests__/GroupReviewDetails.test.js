import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { GroupReviewDetails } from '../GroupReviewDetails';
import { ReviewDetails } from '../../ReviewDetails';

Enzyme.configure({ adapter: new Adapter() })

describe('GroupReviewDetails', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <GroupReviewDetails />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });

  it('should have ReviewDetails as a child', () => {
    const mockProps = {
      groupedCards: [
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
      <GroupReviewDetails {...mockProps}/>,
    );
    expect(Wrapper.find(ReviewDetails)).toHaveLength(1);
  });
});
