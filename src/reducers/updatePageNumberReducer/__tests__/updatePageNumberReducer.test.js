import { updatePageNumberReducer } from '../updatePageNumberReducer';

describe('updatePageNumberReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {
      pageNumber: 2,
    };
    const mockPayload = 3;
    const expected = updatePageNumberReducer(mockState, mockPayload);
    const result = {
      pageNumber: 3,
    };
    expect(expected).toEqual(result);
  });
});
