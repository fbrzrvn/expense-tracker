import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ExpenseTrackerContext } from '../../context/context';
import { formatCurrentDate } from '../../helpers/formatDate';
import Title from '../Title';
import useStyles from './styles';

const Balance = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  const date = formatCurrentDate(new Date());
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Balance</Title>
      <Typography component="p" variant="h4">
        {balance} €
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {date}
      </Typography>
      <div>
        <Link to="/reports" className={classes.link}>
          View statistics
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Balance;
