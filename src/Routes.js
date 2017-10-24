import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
/**
 * Import all page components here
 */
import App from './App';
import MainDiv from './MainDiv';
import LoginPageAnt from './LoginAnt';
import JobBoard from './JobBoard';
import About from './About';
import UserProfile from './components/userDashboard/UserProfileDashboard';
import Application from './components/userDashboard/Application'
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
    
    <Route name="userprofile" breadcrumbName="User Profile" path="/userprofile" component={UserProfile}>
      <IndexRoute name="Dashboard" breadcrumbName="Dashboard" component={About} />
      <Route name="Schools" breadcrumbName="Schools" path="/userprofile/schools" component={About} />
      <Route name="Vacancies" breadcrumbName="Vacancies" path="/userprofile/vacancies" component={About} />
      <Route name="Application" breadcrumbName="Application" path="/userprofile/application" component={Application} />
      <Route name="Profile" breadcrumbName="Profile" path="/userprofile/profile" component={About} />
      <Route name="Search" breadcrumbName="Search" path="/userprofile/search" component={About} />
    </Route>
  </Route>
);
