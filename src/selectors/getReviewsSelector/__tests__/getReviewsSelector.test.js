import { getReviews, getReviewsSelector } from '../getReviewsSelector';

describe('getReviews', () => {
  it('should select data from the store state', () => {
    const mockState = {
      reviews: [
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
        },
      ]
    };
    const expected = getReviews(mockState);
    const result = [
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
      },
    ];
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getReviews(mockState);
    const result = [];
    expect(expected).toEqual(result);
  });
});

describe('getReviewsSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      reviews: [
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
        },
      ]
    };
    const expected = getReviewsSelector(mockState);
    const result = [
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
      },
    ];
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getReviewsSelector(mockState);
    const result = [];
    expect(expected).toEqual(result);
  });
});
