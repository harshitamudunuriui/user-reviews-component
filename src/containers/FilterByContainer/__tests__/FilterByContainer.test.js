import { mapStateToProps, mapDispatchToProps } from '../FilterByContainer';

describe('FilterByContainer', () => {
  it('should map the state to props', () => {
    const mockState = {};
    const expected = mapStateToProps(mockState);
    const result = ['checked5', 'checked4', 'checked3', 'checked2', 'checked1'];
    expect(Object.keys(expected)).toEqual(result);
  });
  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const expected = mapDispatchToProps(mockDispatch);
    const result = ['handleCheckBoxChange'];
    expect(Object.keys(expected)).toEqual(result);
  });
});
