import { connect } from 'react-redux';
import { groupReviews } from '../../actions/commonActions/commonActions';
import { GroupBy } from '../../components/GroupBy';
import { groupBySelector } from '../../selectors/groupBySelector';

export const mapStateToProps = (state) => ({
  group: groupBySelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(
      groupReviews(event.target.value)
    )
  }
});

export const GroupByContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupBy);
