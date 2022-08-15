import { apiEndReducer } from '../apiEndReducer';

describe('apiEndReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {};
    const mockPayload = 'GET_REVIEWS';
    const expected = apiEndReducer(mockState, mockPayload);
    const result = {
      isFetchingData: true
    };
    expect(expected).toEqual(result);
  });
});
