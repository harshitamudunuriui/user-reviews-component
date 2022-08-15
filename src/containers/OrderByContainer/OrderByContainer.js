import { connect } from 'react-redux';
import { orderReviews } from '../../actions/commonActions/commonActions';
import { OrderBy } from '../../components/OrderBy';
import { orderBySelector } from '../../selectors/orderBySelector';

export const mapStateToProps = (state) => ({
  order: orderBySelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(orderReviews(event.target.value))
  }
});

export const OrderByContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderBy);
