import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  mobile: {
    [theme.breakpoints.down('xs')]: {
      margin: '5% 0',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    paddingTop: '100px',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));
