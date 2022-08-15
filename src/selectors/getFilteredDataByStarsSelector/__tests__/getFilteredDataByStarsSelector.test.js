import { getFilteredDataByStarsSelector } from '../getFilteredDataByStarsSelector';

describe('getFilteredDataByStarsSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      reviews: [
        {
          reviewId: 'R1SQ32067PGIK5',
          stars: 5,
          reviewCreated: 1517961600000,
          productImg: '61YqZpvCyaL',
        },
        {
          reviewId: 'R167JDRHY8RJTU',
          stars: 2,
          reviewCreated: 1517011200000,
          productImg: '61YqZpvCyaL',
        },
        {
          reviewId: 'R1V342AML5YST2',
          stars: 3,
          reviewCreated: 1516924800000,
          productImg: '61YqZpvCyaL',
        },
      ],
      filter: {
        5: true,
      }
    };
    const expected = getFilteredDataByStarsSelector(mockState);
    const result = [{
        reviewId: 'R1SQ32067PGIK5',
        stars: 5,
        reviewCreated: 1517961600000,
        productImg: '61YqZpvCyaL',
      }];
    expect(expected).toEqual(result);
  });

  it('should return all reviews', () => {
    const mockState = {
      reviews: [
        {
          reviewId: 'R1SQ32067PGIK5',
          stars: 5,
          reviewCreated: 1517961600000,
          productImg: '61YqZpvCyaL',
        },
        {
          reviewId: 'R167JDRHY8RJTU',
          stars: 2,
          reviewCreated: 1517011200000,
          productImg: '61YqZpvCyaL',
        },
        {
          reviewId: 'R1V342AML5YST2',
          stars: 3,
          reviewCreated: 1516924800000,
          productImg: '61YqZpvCyaL',
        },
      ],
      filter: {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
      }
    };
    const expected = getFilteredDataByStarsSelector(mockState);
    const result = [
      {
      reviewId: 'R1SQ32067PGIK5',
      stars: 5,
      reviewCreated: 1517961600000,
      productImg: '61YqZpvCyaL',
    },
      {
        reviewId: 'R167JDRHY8RJTU',
        stars: 2,
        reviewCreated: 1517011200000,
        productImg: '61YqZpvCyaL',
      },
      {
        reviewId: 'R1V342AML5YST2',
        stars: 3,
        reviewCreated: 1516924800000,
        productImg: '61YqZpvCyaL',
      }
      ];
    expect(expected).toEqual(result);
  });

  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getFilteredDataByStarsSelector(mockState);
    const result = [];
    expect(expected).toEqual(result);
  });
});
