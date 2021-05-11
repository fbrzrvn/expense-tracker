import { green, indigo, red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
  link: {
    textDecoration: 'none',
    color: indigo[500],
  },
}));
