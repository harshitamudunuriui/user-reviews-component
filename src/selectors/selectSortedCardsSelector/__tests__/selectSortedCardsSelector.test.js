import { selectSortedCardsSelector } from '../selectSortedCardsSelector';
import { SORTING } from '../../../constants/SORTING';

describe('selectSortedCardsSelector', () => {
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
        2: true,
        3: true,
      },
      order: SORTING.MOST_RECENT,
    };
    const expected = selectSortedCardsSelector(mockState);
    const result = [
      {
        productImg: '61YqZpvCyaL',
        reviewCreated: 1517961600000,
        reviewId: 'R1SQ32067PGIK5',
        stars: 5
      },
      {
        productImg: '61YqZpvCyaL',
        reviewCreated: 1517011200000,
        reviewId: 'R167JDRHY8RJTU',
        stars: 2
      },
      {
        productImg: '61YqZpvCyaL',
        reviewCreated: 1516924800000,
        reviewId: 'R1V342AML5YST2',
        stars: 3
      }
    ];
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = selectSortedCardsSelector(mockState);
    const result = [];
    expect(expected).toEqual(result);
  });
});
