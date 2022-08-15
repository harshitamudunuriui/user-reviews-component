import * as React from 'react';
import * as PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { SORTING } from '../../constants/SORTING';
import { BootstrapInput } from '../StyledComponents/BootstrapInput';
import { OrderByStyles } from './OrderByStyles';

/**
 * This component is used to show reviews in most recent order or
 * most oldest order
 *
 * @param {string} order - value for sorting the reviews
 * @param {func} handleChange - is used to update the order value
 * @returns {*} a React Stateless Functional Component
 */
export const OrderBy = ({ order, handleChange }) => {
  const classes = OrderByStyles();
  return (
    <FormControl className={classes.margin}>
      <InputLabel htmlFor="group">Order By</InputLabel>
      <NativeSelect
        value={order}
        onChange={handleChange}
        input={<BootstrapInput name="order" id="order-native-simple" />}
      >
        <option value="">Order By</option>
        <option value={SORTING.MOST_OLDEST}>Most Oldest</option>
        <option value={SORTING.MOST_RECENT}>Most Recent</option>
      </NativeSelect>
    </FormControl>
  );
};

OrderBy.propTypes = {
  order: PropTypes.string,
  handleChange: PropTypes.func,
};

OrderBy.defaultProps = {
  order: undefined,
  handleChange: () => {},
};
