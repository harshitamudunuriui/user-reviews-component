import { getCardHeadingHelper } from '../getCardHeadingHelper';
import { GROUP_TYPES } from '../../../constants/GROUP_TYPES';

describe('getCardHeadingHelper', () => {
  const mockTime = [
    '1517958000000',
    '1517007600000',
    '1516921200000',
    '1516230000000',
    '1515711600000',
    '1515625200000',
    '1515538800000',
    '1515452400000',
    '1514934000000',
    '1514502000000',
    '1514329200000',
    '1513551600000',
    '1512946800000'
  ];
  const mockIndex = 1;
  it('should return day format heading', () => {
    const mockGroup = GROUP_TYPES.DAY;
    const expected = getCardHeadingHelper(mockGroup, mockTime, mockIndex);
    const result = '27.01';
    expect(expected).toEqual(result);
  });

  it('should return week format heading', () => {
    const mockGroup = GROUP_TYPES.WEEK;
    const expected = getCardHeadingHelper(mockGroup, mockTime, mockIndex);
    const result = '27.01 - 03.02';
    expect(expected).toEqual(result);
  });

  it('should return month format heading', () => {
    const mockGroup = GROUP_TYPES.MONTH;
    const expected = getCardHeadingHelper(mockGroup, mockTime, mockIndex);
    const result = 'January';
    expect(expected).toEqual(result);
  });
});
