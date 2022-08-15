import { getOrderBy, orderBySelector } from '../orderBySelector';

describe('getOrderBy', () => {
  it('should select data from the store state', () => {
    const mockState = {
      order: '1'
    };
    const expected = getOrderBy(mockState);
    const result = '1';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getOrderBy(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});

describe('orderBySelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      order: '1'
    };
    const expected = orderBySelector(mockState);
    const result = '1';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = orderBySelector(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});
