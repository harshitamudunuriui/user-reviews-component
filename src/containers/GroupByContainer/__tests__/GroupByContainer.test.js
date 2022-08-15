import { mapStateToProps, mapDispatchToProps } from '../GroupByContainer';

describe('GroupByContainer', () => {
  it('should map the state to props', () => {
    const mockState = {};
    const expected = mapStateToProps(mockState);
    const result = ['group'];
    expect(Object.keys(expected)).toEqual(result);
  });
  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const expected = mapDispatchToProps(mockDispatch);
    const result = ['handleChange'];
    expect(Object.keys(expected)).toEqual(result);
  });
});
