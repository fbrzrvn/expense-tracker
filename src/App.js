import React from 'react';
import { Grid } from '@material-ui/core';
import Deteils from './components/Deteils/Deteils';
import Main from './components/Main/Main';
import useStyles from './styles';

const App = () => {

  const classes = useStyles();

  return (
    <Grid container className={classes.grid} spacing={0} alignItems="center" justify="center">
      <Grid container justify="space-around">
        <Grid item className={classes.main} xs={12} sm={10} md={4}>
          <Main />
        </Grid>
        <Grid item className={classes.mobile} xs={12} sm={5} md={3}>
          <Deteils title="Income" />
        </Grid>
        <Grid item className={classes.last} xs={12} sm={5} md={3}>
          <Deteils title="Expense" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
