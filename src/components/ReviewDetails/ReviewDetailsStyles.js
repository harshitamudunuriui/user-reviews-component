import { makeStyles } from '@material-ui/core';

export const ReviewDetailsStyles = makeStyles(theme => ({
  icon: {
    fontSize: 16,
  },
  card: {
    minWidth: 275,
    maxWidth: 600,
    padding: 10,
    margin: theme.spacing(1),
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    width: '90%',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    color: 'grey',
    fontSize: 14,
  },
  logo: {
    width: 40,
    height: 40,
  },
  item: {
    width: '10%',
  }
}));
