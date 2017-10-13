import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
/**
 * Import all page components here
 */
import App from './App';
import TestPage from './MainDiv';
import LoginPage from './Login';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
<Route>
    <Route path="/" component={App}>
      <IndexRoute component={TestPage} />
      <Route path="/About" component={LoginPage} />
      <Route path="/Register" component={TestPage} />
      <Route path="/JobBoard" component={LoginPage} />
    </Route>
    <Route path="/Login" component={LoginPage} />
  </Route>
);
