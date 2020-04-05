import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import overrides from './overrides';
import './index.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lato',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(',')
  },
  overrides
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Login path="/"></Login>
        <Dashboard path="dashboard"></Dashboard>
      </Router>
    </ThemeProvider>
  );
};

export default App;
