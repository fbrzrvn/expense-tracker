import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';
import Form from './Form/Form';
import List from './List/List';
import useStyles from './styles';

const Main = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5">Total Balance ${balance} </Typography>
        {balance === 0 ? (
          <Typography variant="subtitle1" className={classes.subtitle}>
            Start with take track of your income and expense just adding them
            using the form below
          </Typography>
        ) : null}
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
