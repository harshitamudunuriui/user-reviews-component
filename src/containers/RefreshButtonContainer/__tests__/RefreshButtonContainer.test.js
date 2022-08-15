import { mapDispatchToProps } from '../RefreshButtonContainer';

describe('RefreshButtonContainer', () => {
  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const expected = mapDispatchToProps(mockDispatch);
    const result = ['onClick'];
    expect(Object.keys(expected)).toEqual(result);
  });
});
