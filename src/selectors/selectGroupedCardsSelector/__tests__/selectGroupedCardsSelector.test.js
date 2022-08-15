import { selectGroupedCardsSelector } from '../selectGroupedCardsSelector';
import { GROUP_TYPES } from '../../../constants/GROUP_TYPES';
import { SORTING } from '../../../constants/SORTING';

describe('selectGroupedCardsSelector', () => {
  it('should select data from the store state and sort by most recent', () => {
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
      group: GROUP_TYPES.WEEK,
      filter: {
        5: true,
        2: true,
        3: true,
      },
      order: SORTING.MOST_RECENT,
    };
    const expected = selectGroupedCardsSelector(mockState);
    const result = [
      [
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1517961600000,
          reviewId: 'R1SQ32067PGIK5',
          stars: 5
        }
      ],
      [
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
      ]
    ];
    expect(expected).toEqual(result);
  });

  it('should select data from the store state and sort by most oldest', () => {
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
      group: GROUP_TYPES.WEEK,
      filter: {
        5: true,
        2: true,
        3: true,
      },
      order: SORTING.MOST_OLDEST,
    };
    const expected = selectGroupedCardsSelector(mockState);
    const result = [
      [
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1516924800000,
          reviewId: 'R1V342AML5YST2',
          stars: 3
        },
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1517011200000,
          reviewId: 'R167JDRHY8RJTU',
          stars: 2
        }
      ],
      [
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1517961600000,
          reviewId: 'R1SQ32067PGIK5',
          stars: 5
        }
      ]
    ];
    expect(expected).toEqual(result);
  });

  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = selectGroupedCardsSelector(mockState);
    const result = [];
    expect(expected).toEqual(result);
  });
});
