import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import MainLayout from '../../layout/MainLayout';
import useStyles from '../../styles';

const Reports = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Grid container spacing={3}>
        {/* Income Chart */}
        <Grid item xs={12} md={6}>
          <DoughnutChart title="Income" />
        </Grid>
        {/* Expense Chart */}
        <Grid item xs={12} md={6}>
          <DoughnutChart title="Expense" />
        </Grid>
        {/* Balance Chart */}
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Reports;
