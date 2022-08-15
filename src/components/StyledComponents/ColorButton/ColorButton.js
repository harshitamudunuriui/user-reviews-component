import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

/**
 * This Component is used to return the customized the button
 *
 * @returns {*} a React Stateless Component
 */
export const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
    backgroundColor: '#82939C',
    minWidth: '150px',
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: '#2099C3',
    },
  },
}))(Button);
