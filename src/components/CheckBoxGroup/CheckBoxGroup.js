import * as React from 'react';
import * as PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import { CheckBoxGroupStyles } from './CheckBoxGroupStyles';

/**
 * This component is used to display checkbox with label and star
 *
 * @param {func} handleCheckBoxChange - is used to update the star values in
 *  store
 * @param {value} value - checkBox value
 * @param {boolean} checked - is used to check and uncheck the checkbox
 * @param {string} label - text for the checkbox
 * @returns {*} a React Stateless Functional Component
 */
export const CheckBoxGroup = ({
  value,
  handleCheckBoxChange,
  checked,
  label
}) => {
  const classes = CheckBoxGroupStyles();
  return (
    <div className='checkBox-group'>
      <Checkbox
        checked={checked}
        onChange={handleCheckBoxChange}
        value={value}
        color="primary"
      />
      <label>{label}</label>
      <Icon
        color="disabled"
        className={classes.icon}>
        star
      </Icon>
    </div>
  );
};

CheckBoxGroup.propTypes = {
  checked: PropTypes.bool,
  handleCheckBoxChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
};

CheckBoxGroup.defaultProps = {
  checked: false,
  handleCheckBoxChange: () => {},
  value: '',
  label: '',
};
