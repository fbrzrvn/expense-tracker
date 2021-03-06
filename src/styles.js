import { makeStyles } from '@material-ui/core/styles';
import { Directions } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import { findByLabelText } from '@testing-library/dom';

export default makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));
