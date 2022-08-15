import { groupReducer } from '../groupReducer';

describe('groupReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {
      group: ''
    };
    const mockPayload = 'day';
    const expected = groupReducer(mockState, mockPayload);
    const result = {
      group: 'day',
    };
    expect(expected).toEqual(result);
  });
});
