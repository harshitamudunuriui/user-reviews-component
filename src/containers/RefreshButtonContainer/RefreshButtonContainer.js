import { connect } from 'react-redux';
import { RefreshButton } from '../../components/RefreshButton';
import { resetReviews, fetchReviews } from '../../actions/commonActions/commonActions';

export const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(resetReviews());
    dispatch(fetchReviews(1));
  }
});

export const RefreshButtonContainer = connect(
  null,
  mapDispatchToProps,
)(RefreshButton);
