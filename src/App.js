import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.grid}
      spacing={0}
      alignItems="center"
      justify="center"
    >
      <Typography variant="h2">Expense Tracker</Typography>
      <Grid container justify="space-around">
        <Grid item xs={12} sm={10} md={4} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={5} md={3} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={5} md={3} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
