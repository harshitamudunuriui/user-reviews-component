import { starCheckedParamSelector, starCheckedFactorySelector } from '../starCheckedParamSelector';

describe('starCheckedParamSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      filter: {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
      },
    };
    const expected = starCheckedParamSelector.checked1(mockState);
    const result = true;
    expect(expected).toEqual(result);
  });

  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = starCheckedParamSelector.checked1(mockState);
    const result = false;
    expect(expected).toEqual(result);
  });
});

describe('starCheckedFactorySelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      filter: {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
      },
    };
    const expected = starCheckedFactorySelector('1', false)(mockState);
    const result = true;
    expect(expected).toEqual(result);
  });

  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = starCheckedFactorySelector('', false)(mockState);
    const result = false;
    expect(expected).toEqual(result);
  });
});
