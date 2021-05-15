import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import Setting from './pages/Setting';
import Statistics from './pages/Statistics';
import Transactions from './pages/Transactions';
import * as ROUTES from './routes';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Switch>
          <Route path={ROUTES.AUTH} component={Auth} />
          <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
          <Route path={ROUTES.SETTING} component={Setting} />
          <Route path={ROUTES.STATISTICS} component={Statistics} />
          <Route path={ROUTES.TRANSACTIONS} component={Transactions} />
          <Route path={ROUTES.HOME} component={Dashboard} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
