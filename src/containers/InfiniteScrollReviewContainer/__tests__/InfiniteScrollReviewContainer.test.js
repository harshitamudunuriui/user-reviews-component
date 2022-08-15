import { mapStateToProps, mapDispatchToProps } from '../InfiniteScrollReviewContainer';

describe('InfiniteScrollReviewContainer', () => {
  it('should map the state to props', () => {
    const mockState = {};
    const expected = mapStateToProps(mockState);
    const result = ['reviews', 'hasMore', 'group', 'pageNumber'];
    expect(Object.keys(expected)).toEqual(result);
  });
  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const expected = mapDispatchToProps(mockDispatch);
    const result = ['fetchReviewItems'];
    expect(Object.keys(expected)).toEqual(result);
  });
});
