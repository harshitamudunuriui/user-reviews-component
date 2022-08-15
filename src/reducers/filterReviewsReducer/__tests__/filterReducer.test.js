import { filterReducer } from '../filterReducer';

describe('filterReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = { filter: {
      1: false
      }
    };
    const mockPayload = {
      1: true,
    };
    const expected = filterReducer(mockState, mockPayload);
    const result =  {
      filter:
        {
          1: true
        }
    };
    expect(expected).toEqual(result);
  });
});
