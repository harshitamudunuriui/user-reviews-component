import * as React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { RatingStyles } from './RatingStyles';


export const starsArray = [1, 2, 3, 4, 5];

/**
 * This component is used to display rating stars based on the length and stars
 * count. if the length is 5 and stars is 4 then it will fill 4 stars and and 1
 * star will be empty
 *
 * @param {number} stars - stars value from the response
 * @returns {*} a React Stateless Functional Component
 */
export const Rating = ({ stars }) => {
  const classes = RatingStyles();
  return (
    <div>
      {
        starsArray.map((item, index) => (
          <Icon
            key={item}
            className={classes.icon}
            color={
              index < stars ?
                'inherit' :
                'disabled'
            }
          >
            star
          </Icon>
        ))
      }
    </div>
  );
};

Rating.propTypes = {
  stars: PropTypes.number,
};

Rating.defaultProps = {
  stars: 0,
};
