import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from './useTransactions';

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
