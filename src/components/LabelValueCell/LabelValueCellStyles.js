import { makeStyles } from '@material-ui/core';

export const LabelValueCellStyles = makeStyles(theme => ({
  label: {
    textTransform: 'upperCase',
    position: 'relative',
    display: 'inline-block',
    fontSize: 10,
    color: 'grey',
  },
  value: {
    minHeight: 30,
    color: 'black',
    lineHeight: 1,
    fontWeight: 'bold',
  },
  item: {
    width: '30%',
  }
}));
