import { Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import Balance from '../../components/Balance';
import Form from '../../components/Form';
import Transactions from '../../components/Transactions';
import MainLayout from '../../layout/MainLayout';
import useStyles from './styles';

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <MainLayout>
      <Grid container spacing={3}>
        {/* Form */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Form />
          </Paper>
        </Grid>
        {/* Balance */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Balance />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Transactions />
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Dashboard;
