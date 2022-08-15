import { connect } from 'react-redux';
import { GroupReviewDetails } from '../../components/GroupReviewDetails';
import { selectGroupedCardsSelector } from '../../selectors/selectGroupedCardsSelector';
import { getCardHeadingsSelector } from '../../selectors/getCardHeadingsSelector';
import { groupBySelector } from '../../selectors/groupBySelector';

export const mapStateToProps = (state) => ({
 groupedCards: selectGroupedCardsSelector(state),
 cardHeadings: getCardHeadingsSelector(state),
 group: groupBySelector(state),
});

export const GroupReviewDetailsContainer = connect(
  mapStateToProps,
)(GroupReviewDetails);
