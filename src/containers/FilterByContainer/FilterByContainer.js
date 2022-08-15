import { connect } from 'react-redux';
import { FilterBy } from '../../components/FilterBy';
import { filterReviews } from '../../actions/commonActions/commonActions';
import { starCheckedParamSelector } from '../../selectors/starCheckedParamSelector';

export const mapStateToProps = (state) => ({
  checked5: starCheckedParamSelector.checked5(state),
  checked4: starCheckedParamSelector.checked4(state),
  checked3: starCheckedParamSelector.checked3(state),
  checked2: starCheckedParamSelector.checked2(state),
  checked1: starCheckedParamSelector.checked1(state),
});

export const mapDispatchToProps = (dispatch) => ({
  handleCheckBoxChange: (name) => (event) => {
    dispatch(
      filterReviews({
          [name]: event.target.checked
        }
      )
    )
  }
});

export const FilterByContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterBy);
