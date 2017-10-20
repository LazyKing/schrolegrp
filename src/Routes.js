import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
/**
 * Import all page components here
 */
import App from './App';
import MainDiv from './MainDiv';
import LoginPageAnt from './LoginAnt';
import JobBoard from './JobBoard'
import About from './About'
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
<Route>
    <Route path="/" component={App}>
      <IndexRoute component={MainDiv} />
      <Route path="/About" component={About} />
      <Route path="/Register" component={MainDiv} />
      <Route path="/JobBoard" component={JobBoard} />
    </Route>
    <Route path="/Login" component={LoginPageAnt} />
  </Route>
);
