import { getPageNumber, getPageNumberSelector } from '../getPageNumberSelector';

describe('getPageNumber', () => {
  it('should select data from the store state', () => {
    const mockState = {
      pageNumber: 2,
    };
    const expected = getPageNumber(mockState);
    const result = 2;
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getPageNumber(mockState);
    const result = 1;
    expect(expected).toEqual(result);
  });
});

describe('getPageNumberSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      pageNumber: 2,
    };
    const expected = getPageNumberSelector(mockState);
    const result = 2;
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getPageNumberSelector(mockState);
    const result = 1;
    expect(expected).toEqual(result);
  });
});
