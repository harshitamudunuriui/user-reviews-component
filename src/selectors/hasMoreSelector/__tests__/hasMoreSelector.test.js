import { getHasMore, hasMoreSelector } from '../hasMoreSelector';

describe('getHasMore', () => {
  it('should select data from the store state', () => {
    const mockState = {
      hasMore: true,
    };
    const expected = getHasMore(mockState);
    const result = true;
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getHasMore(mockState);
    const result = false;
    expect(expected).toEqual(result);
  });
});

describe('hasMoreSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      hasMore: true
    };
    const expected = hasMoreSelector(mockState);
    const result = true;
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = hasMoreSelector(mockState);
    const result = false;
    expect(expected).toEqual(result);
  });
});
