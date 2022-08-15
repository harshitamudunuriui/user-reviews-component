import { getCardHeadingsSelector } from '../getCardHeadingsSelector';
import { SORTING } from '../../../constants/SORTING';
import { GROUP_TYPES } from '../../../constants/GROUP_TYPES';

describe('getCardHeadingsSelector', () => {
  it('should select data and return in ascending order', () => {
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
      order: SORTING.MOST_OLDEST,
      group: GROUP_TYPES.DAY,
      filter: {
        3: true,
        4: true,
        5: true,
      }
    };
    const expected = getCardHeadingsSelector(mockState);
    const result = [
      "1516921200000",
      "1517958000000"
    ];
    expect(expected).toEqual(result);
  });

  it('should select data and return in descending order', () => {
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
      order: SORTING.MOST_RECENT,
      group: GROUP_TYPES.DAY,
      filter: {
        3: true,
        4: true,
        5: true,
      }
    };
    const expected = getCardHeadingsSelector(mockState);
    const result = [
      "1517958000000",
      "1516921200000",
    ];
    expect(expected).toEqual(result);
  });

  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getCardHeadingsSelector(mockState);
    const result = [];
    expect(expected).toEqual(result);
  });
});
