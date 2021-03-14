import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';

const Main = () => {

  const { balance } = useContext(ExpenseTrackerContext);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" />
      <CardContent>
        <Typography variant="h5">Total Balance ${balance} </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          <Divider className={classes.divider} />
          <Form />
        </Typography>
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2} >
          <Grid item xs={12} >
           <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main;
