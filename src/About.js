import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

//import { Provider } from "react-redux";
//import { createStore } from "redux";
//import reducers from "./reducers";
import { Link } from 'react-router'

class About extends Component {
  render() {
    return (
      <div className="App height-fluid">
        <div className="App-header about-us-introduction-container col-sm-12">
          <div className="about-us-page-intro-text-container col-sm-5">
            <h2 style={{'textAlign': 'left'}}>
              About Schrole Connect
            </h2>
            <p className="about-us-page-intro-text">
              <strong>Schrole Connect is the easiest way to find your next teaching job overseas.</strong>
            </p>
            <p className="about-us-page-intro-text">
              <strong>Our online portal lets you connect with the world’s top International Schools seeking qualified teachers.</strong>
            </p>
            <p className="about-us-page-intro-text">
              <strong>Apply directly to featured vacancies or become a premium candidate and search our database of schools and current vacancies.</strong>
            </p>
            <Button type="primary" className="col-sm-5 become-premiumMember-button"> Become A Premium Candidate </Button>
            <Link role="button" to="/Login">Already registered? Login to upgrade.</Link>
          </div>
        </div>
        <div className="App-header about-us-introduction-container-2 col-sm-12">
          <div className="about-us-page-intro-text-container col-sm-6 float-right">
            <h2> Why International Education Services? </h2>
            <div>
            </div>
            <li className="about-us-page-intro-text">
              <strong>IES provides a database with job vacancies from around the world. Each candidate has access to all our openings worldwide. We feature jobs in places like, China, Europe, Thailand, India, Taiwan, and many other countries.</strong>
            </li>
            <li className="about-us-page-intro-text">
              <strong>Teachers can locate and apply directly to jobs around the world.</strong>
            </li>
            <li className="about-us-page-intro-text">
              <strong>IES works with reputable schools that are looking to find highly qualified teachers.</strong>
            </li>
            <li className="about-us-page-intro-text">
              <strong>IES attracts schools that aspire to provide professional development for their teachers and prefers to hire personnel who desires to advance in the field of education.</strong>
            </li>
            <li className="about-us-page-intro-text">
              <strong>IES offers their candidate support from the application submission to signing their contract and beyond.</strong>
            </li>
            <li className="about-us-page-intro-text">
              <strong>Each person hire through IES is provided with a Candidate Assistant, who will be your contact until you walk in your school.</strong>
            </li>
            <li className="about-us-page-intro-text">
              <strong>We assist you with visas applications, background checks, and other paperwork regarding your new placement.</strong>
            </li>
            <li className="about-us-page-intro-text">
              <strong>Also, IES offers monthly informational sessions during peak recruiting season to guide teachers and administrators along the way.</strong>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
