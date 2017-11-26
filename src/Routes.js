import React from 'react';
import { Route, IndexRoute } from 'react-router'
/**
 * Import all page components here
 */
import App from './App';
import MainDiv from './MainDiv';
import JobBoard from './JobBoard';
import About from './About';

/*Login&Registration components*/
import LoginAndRegistrationContainer from './components/registerComponents/LoginAndRegistrationContainer'
import LoginPageAnt from './LoginAnt';
import ApplicantRegister from './components/registerComponents/ApplicantRegister';
import SchoolRegisterForm from './components/registerComponents/SchoolRegisterForm';
import SchoolRegisterBasicPage from './components/registerComponents/schoolRegister/SchoolRegisterBasicPage';

/*user profile components*/
import UserProfile from './components/userDashboard/UserProfileDashboard';
import Application from './components/userDashboard/Application';
import Dashboard from './components/userDashboard/Dashboard';
import Profile from './components/userDashboard/Profile';
/*userProfile:: School components*/
import Schools from './components/userDashboard/Schools';
import SchoolList from './components/userDashboard/schools/SchoolList';
import SchoolDetails from './components/userDashboard/schools/SchoolDetails';

/*school profile components*/
import SchoolDetailsProfile from './components/schoolDashboard/UserProfileDashboard';
import SchoolApplication from './components/schoolDashboard/Application';
import SchoolDashboard from './components/schoolDashboard/Dashboard';
import SchoolProfile from './components/schoolDashboard/Profile';
/*schoolProfile:: School components*/
// import Schools from './components/schoolDashboard/Schools';
// import SchoolList from './components/schoolDashboard/schools/SchoolList';
// import SchoolDetails from './components/schoolDashboard/schools/SchoolDetails';


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
      <Route path="/SchoolRegisterBasicPage" component={SchoolRegisterBasicPage} />
    </Route>

    <Route name="schoolprofile" breadcrumbName="School Profile" path="/schoolprofile" component={SchoolDetailsProfile}>
      <IndexRoute name="School_Dashboard" breadcrumbName="Dashboard" component={SchoolDashboard} />
      <Route name="Schools" breadcrumbName="Schools" path="/schoolprofile/schools" component={Schools}>
        <IndexRoute name="SchoolList" breadcrumbName="SchoolList" component={SchoolList} />
        <Route name="SchoolDetails" path="/schools/:id" component={SchoolDetails} />
      </Route>
      <Route name="School_Vacancies" breadcrumbName="Vacancies" path="/schoolprofile/vacancies" component={About} />
      <Route name="School_Application" breadcrumbName="Application" path="/schoolprofile/application" component={SchoolApplication} />
      <Route name="School_Profile" breadcrumbName="Profile" path="/schoolprofile/profile" component={SchoolProfile} />
      <Route name="School_Search" breadcrumbName="Search" path="/schoolprofile/search" component={About} />
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
