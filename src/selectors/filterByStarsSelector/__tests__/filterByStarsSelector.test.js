import { getFilterByStars, filterByStarsSelector } from '../filterByStarsSelector';

describe('getFilterByStars', () => {
  it('should select data from the store state', () => {
    const mockState = {
      filter: {
        checked1: false,
        checked2: false,
        checked3: false,

      },
    };
    const expected = getFilterByStars(mockState);
    const result = {
        checked1: false,
        checked2: false,
        checked3: false,
    };
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getFilterByStars(mockState);
    const result = {};
    expect(expected).toEqual(result);
  });
});

describe('filterByStarsSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      filter: {
        checked1: false,
        checked2: false,
        checked3: false,

      },
    };
    const expected = filterByStarsSelector(mockState);
    const result = {
      checked1: false,
      checked2: false,
      checked3: false,
    };
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = filterByStarsSelector(mockState);
    const result = {};
    expect(expected).toEqual(result);
  });
});
