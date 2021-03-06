import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';

const Main = () => {

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance $0.00</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          <Divider />
          {/* <Form /> */}
        </Typography>
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2} >
          <Grid item xs={12} >
           {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main;
