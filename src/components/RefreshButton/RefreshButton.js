import React from 'react';
import { RefreshButtonStyles } from './RefreshButtonStyles';
import { ColorButton } from '../StyledComponents/ColorButton';

/**
 * This Component is used to refresh the data
 *
 * @param {func} onClick - it is used to trigger click event
 * @returns {*} a React Stateless Functional Component
 */
export const RefreshButton = ({ onClick }) => {
  const classes = RefreshButtonStyles();

  return (
    <div className={classes.container}>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={onClick}
      >
        REFRESH
      </ColorButton>
    </div>
  );
};
