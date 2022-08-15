import { connect } from 'react-redux';
import { InfiniteScrollReview } from '../../components/InfiniteScrollReview';
import { getReviewsSelector } from '../../selectors/getReviewsSelector';
import { hasMoreSelector } from '../../selectors/hasMoreSelector';
import { fetchReviews, updatePageNumber } from '../../actions/commonActions/commonActions';
import { groupBySelector } from '../../selectors/groupBySelector';
import { getPageNumberSelector } from '../../selectors/getPageNumberSelector';

export const mapStateToProps = (state) => ({
  reviews: getReviewsSelector(state),
  hasMore: hasMoreSelector(state),
  group: groupBySelector(state),
  pageNumber: getPageNumberSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  fetchReviewItems: (pageNumber) => {
    dispatch(fetchReviews(pageNumber));
    dispatch(updatePageNumber(pageNumber));
  }
});

export const InfiniteScrollReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfiniteScrollReview);
