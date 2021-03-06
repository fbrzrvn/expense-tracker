import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';

const Deteils = ({ title }) => {

  const classes = useStyles();
  return (
    <Card className={ title === 'Income' ? classes.income : classes.expense }>
      <CardHeader />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
      </CardContent>
    </Card>
  )
}

export default Deteils;
