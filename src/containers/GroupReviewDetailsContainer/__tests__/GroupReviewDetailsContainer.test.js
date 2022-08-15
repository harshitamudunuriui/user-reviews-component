import { mapStateToProps } from '../GroupReviewDetailsContainer';

describe('GroupReviewDetailsContainer', () => {
  it('should map the state to props', () => {
    const mockState = {};
    const expected = mapStateToProps(mockState);
    const result = ['groupedCards', 'cardHeadings', 'group'];
    expect(Object.keys(expected)).toEqual(result);
  });
});
