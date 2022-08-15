import { connect } from 'react-redux';
import { ReviewDetails } from '../../components/ReviewDetails';
import { selectSortedCardsSelector } from '../../selectors/selectSortedCardsSelector';

export const mapStateToProps = (state) => ({
  cards: selectSortedCardsSelector(state),
});

export const ReviewDetailsContainer = connect(
  mapStateToProps,
)(ReviewDetails);
