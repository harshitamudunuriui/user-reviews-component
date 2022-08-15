import { getGroupByTimeSelector } from '../getGroupByTimeSelector';
import { GROUP_TYPES } from '../../../constants/GROUP_TYPES';

describe('getGroupByTimeSelector', () => {
  it('should select data from the store state and return in format', () => {
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
      group: GROUP_TYPES.DAY,
      filter: {
        5: true,
        4: true,
        3: true,
      }
    };
    const expected = getGroupByTimeSelector(mockState);
    const result = {
      '1516921200000': [
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1516924800000,
          reviewId: 'R1V342AML5YST2',
          stars: 3
        }
      ],
      '1517958000000': [
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1517961600000,
          reviewId: 'R1SQ32067PGIK5',
          stars: 5
        }
      ]
    };
    expect(expected).toEqual(result);
  });

  it('should select data from the store state and return in week format', () => {
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
        4: true,
        3: true,
      }
    };
    const expected = getGroupByTimeSelector(mockState);
    const result = {
      '1516575600000': [
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1516924800000,
          reviewId: 'R1V342AML5YST2',
          stars: 3
        }
      ],
      '1517785200000': [
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1517961600000,
          reviewId: 'R1SQ32067PGIK5',
          stars: 5
        }
      ]
    };
    expect(expected).toEqual(result);
  });

  it('should select data from the store state and return in month format', () => {
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
      group: GROUP_TYPES.MONTH,
      filter: {
        5: true,
        4: true,
        3: true,
      }
    };
    const expected = getGroupByTimeSelector(mockState);
    const result = {
      '1514761200000': [
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1516924800000,
          reviewId: 'R1V342AML5YST2',
          stars: 3
        }
      ],
      '1517439600000': [
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1517961600000,
          reviewId: 'R1SQ32067PGIK5',
          stars: 5
        }
      ]
    };
    expect(expected).toEqual(result);
  });

  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getGroupByTimeSelector(mockState);
    const result = {};
    expect(expected).toEqual(result);
  });
});
