import { getProductTitleHelper } from '../getProductTitleHelper';

describe('getProductTitleHelper', () => {
  it('should return updated product title value', () => {
    const mockItem = {
      productTitle: 'Just as cute as it can be',
    };
    const expected = getProductTitleHelper(mockItem);
    const result = 'Just as cute as...';
    expect(expected).toEqual(result);
  });

  it('should return default value', () => {
    const mockItem = {};
    const expected = getProductTitleHelper(mockItem);
    const result = '';
    expect(expected).toEqual(result);
  });
});
