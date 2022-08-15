import { getProductImageHelper } from '../getProductImageHelper';

describe('getProductImageHelper', () => {
  it('should form image url with mockItem', () => {
    const mockItem = {
      productImg: '61YqZpvCyaL',
    };
    const expected = getProductImageHelper(mockItem);
    const result =  "https://images-na.ssl-images-amazon.com/images/I/61YqZpvCyaL._CR412,0,1060,1060_UX100.jpg";
    expect(expected).toEqual(result);
  });
});
