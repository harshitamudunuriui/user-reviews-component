import { getGroupByTimeHelper } from '../getGroupByTimeHelper';
import { GROUP_TYPES } from '../../../constants/GROUP_TYPES';

describe('getGroupByTimeHelper', () => {
  const mockReviews = [
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
  ];
  it('should return day format data', () => {
    const mockGroup = GROUP_TYPES.DAY;
    const expected = getGroupByTimeHelper(mockReviews, mockGroup);
    const result = {
      '1516921200000': [
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1516924800000,
          reviewId: 'R1V342AML5YST2',
          stars: 3
        }
      ],
      '1517007600000': [
        {
          productImg: '61YqZpvCyaL',
          reviewCreated: 1517011200000,
          reviewId: 'R167JDRHY8RJTU',
          stars: 2
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

  it('should return week format data', () => {
    const mockGroup = GROUP_TYPES.WEEK;
    const expected = getGroupByTimeHelper(mockReviews, mockGroup);
    const result = {
      '1516575600000': [
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

  it('should return month format data', () => {
    const mockGroup = GROUP_TYPES.MONTH;
    const expected = getGroupByTimeHelper(mockReviews, mockGroup);
    const result = {
      '1514761200000': [
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

  it('should return default data', () => {
    const mockGroup = GROUP_TYPES.MONTH;
    const mockReviewDetails = [];
    const expected = getGroupByTimeHelper(mockReviewDetails, mockGroup);
    const result = {};
    expect(expected).toEqual(result);
  });
});
