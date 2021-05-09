import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './components/Dashboard/Dashboard';
import { Provider } from './context/context';

ReactDOM.render(
  <Provider>
    <Dashboard />
    <App />
  </Provider>,
  document.getElementById('root')
);
