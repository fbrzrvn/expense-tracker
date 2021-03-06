import React from 'react';
import { Grid } from '@material-ui/core';
import Deteils from './components/Deteils/Deteils';
import Main from './components/Main/Main';
import useStyles from './styles';

const App = () => {

  const classes = useStyles();

  return (
    <Grid container className={classes.grid} >
      <Grid container align="center" justify="center" spacing={3,0} >
        <Grid item className={ classes.main } xs={12} sm={6} >
          <Main />
        </Grid>
      </Grid>
      <Grid container justify="space-around" >
        <Grid item className={classes.mobile} xs={12} sm={4} >
          <Deteils title="Income" />
        </Grid>
        <Grid item className={classes.last} xs={12} sm={4} >
          <Deteils title="Expense" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
