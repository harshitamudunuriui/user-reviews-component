import * as React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { GroupByStyles } from './GroupByStyles';
import { GROUP_TYPES } from '../../constants/GROUP_TYPES';
import { BootstrapInput } from '../StyledComponents/BootstrapInput';

/**
 * This component is used to show reviews in group format in day ,
 * week or month
 *
 * @param {string} group - value for grouping the reviews
 * @param {func} handleChange - is used to update the order value
 * @returns {*} a React Stateless Functional Component
 */
export const GroupBy = ({ group, handleChange }) => {
  const classes = GroupByStyles();
  return (
    <FormControl className={classes.margin}>
      <InputLabel htmlFor="group-label">Group By</InputLabel>
      <NativeSelect
        value={group}
        onChange={handleChange}
        input={<BootstrapInput name="group" id="group-input" />}
      >
        <option value="">Group By</option>
        <option value={GROUP_TYPES.DAY}>Day</option>
        <option value={GROUP_TYPES.WEEK}>Week</option>
        <option value={GROUP_TYPES.MONTH}>Month</option>
      </NativeSelect>
    </FormControl>
  );
};

GroupBy.propTypes = {
  group: PropTypes.string,
  handleChange: PropTypes.func,
};

GroupBy.defaultProps = {
  group: undefined,
  handleChange: () => {},
};
