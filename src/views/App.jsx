import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import { createBrowserHistory } from "history";
import '../styles/main.scss';

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Redirect exact path="/" to="/login" />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App;