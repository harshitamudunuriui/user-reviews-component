import { orderReducer } from '../orderReducer';

describe('orderReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = { order: ''};
    const mockPayload = '1';
    const expected = orderReducer(mockState, mockPayload);
    const result = {
      order: '1',
    };
    expect(expected).toEqual(result);
  });
});
