import React from 'react';
import { Route, IndexRoute } from 'react-router'
/**
 * Import all page components here
 */
import App from './App';
import MainDiv from './MainDiv';

import JobBoard from './JobBoard';
import About from './About';
import UserProfile from './components/userDashboard/UserProfileDashboard';
import Application from './components/userDashboard/Application';
import Dashboard from './components/userDashboard/Dashboard';
import Profile from './components/userDashboard/Profile';

/*School routes*/
import Schools from './components/userDashboard/Schools';
import SchoolList from './components/userDashboard/schools/SchoolList';
import SchoolDetails from './components/userDashboard/schools/SchoolDetails';

/*Login&Registration components*/
import LoginAndRegistrationContainer from './components/registerComponents/LoginAndRegistrationContainer'
import LoginPageAnt from './LoginAnt';
import ApplicantRegister from './components/registerComponents/ApplicantRegister';
import SchoolRegisterForm from './components/registerComponents/SchoolRegisterForm'

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

    <Route path="/Login" component={LoginAndRegistrationContainer}>
      <IndexRoute component={LoginPageAnt} />
      <Route path="/RegisterApplicant" component={ApplicantRegister} />
      <Route path="/RegisterSchool" component={SchoolRegisterForm} />
    </Route>


    <Route name="userprofile" breadcrumbName="User Profile" path="/userprofile" component={UserProfile}>
      <IndexRoute name="Dashboard" breadcrumbName="Dashboard" component={Dashboard} />
      <Route name="Schools" breadcrumbName="Schools" path="/userprofile/schools" component={Schools}>
        <IndexRoute name="SchoolList" breadcrumbName="SchoolList" component={SchoolList} />
        <Route name="SchoolDetails" path="/schools/:id" component={SchoolDetails} />
      </Route>
      <Route name="Vacancies" breadcrumbName="Vacancies" path="/userprofile/vacancies" component={About} />
      <Route name="Application" breadcrumbName="Application" path="/userprofile/application" component={Application} />
      <Route name="Profile" breadcrumbName="Profile" path="/userprofile/profile" component={Profile} />
      <Route name="Search" breadcrumbName="Search" path="/userprofile/search" component={About} />
    </Route>
  </Route>
);
