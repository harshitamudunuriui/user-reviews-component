import * as React from 'react';
import PropTypes from 'prop-types';
import { Rating } from '../Rating';
import { LabelValueCellStyles } from './LabelValueCellStyles';

/**
 * This component is used to display label and value details. if rating is true
 * then value will display as star icons
 *
 * @returns {*} a React Stateless Functional Component
 */
export const LabelValueCell = ({ label, value, stars, rating }) => {
  const classes = LabelValueCellStyles();

  return (
    <div className={classes.item}>
      <label className={classes.label}>
        {label}
      </label>
      {
        rating ?
          <Rating
            rating={rating}
            stars={stars}
          /> :
          <div className={classes.value}>
            {value}
          </div>
      }
    </div>
  );
};

LabelValueCell.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  rating: PropTypes.bool,
  stars: PropTypes.number,
};

LabelValueCell.defaultProps = {
  label: '',
  value: '',
  rating: false,
  stars: 0,
};
