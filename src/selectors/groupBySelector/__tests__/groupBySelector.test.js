import { getGroupBy, groupBySelector } from '../groupBySelector';

describe('getGroupBy', () => {
  it('should select data from the store state', () => {
    const mockState = {
      group: 'day'
    };
    const expected = getGroupBy(mockState);
    const result = 'day';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getGroupBy(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});

describe('groupBySelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      group: 'day'
    };
    const expected = groupBySelector(mockState);
    const result = 'day';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = groupBySelector(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});
