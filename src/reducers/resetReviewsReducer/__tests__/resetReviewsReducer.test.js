import { resetReviewsReducer } from '../resetReviewsReducer';

describe('resetReviewsReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {
      reviews: [
        {
          reviewId: 'R1SQ32067PGIK5',
          stars: 5,
          reviewCreated: 1517961600000,
          productImg: '61YqZpvCyaL',
        }
      ],
      hasMore: false,
    };
    const expected = resetReviewsReducer(mockState);
    const result = {
      hasMore: true,
      reviews: [],
      pageNumber: 1,
    };
    expect(expected).toEqual(result);
  });
});
