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
            <h2 style={{'text-align': 'left'}}>
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
            <h2> Why Schrole Connect? </h2>
            <p className="about-us-page-intro-text">
              <strong>Connect’s advanced search capabilities lets you look for vacancies from schools all over the globe. 
              China, Thailand, Europe; the choices are limitless.</strong>
            </p>  
            <p className="about-us-page-intro-text">
              <strong>We work with reputable schools looking for qualified teachers. 
              Many of our schools have excellent professional development programs and career advancement opportunities for 
              teachers so you can be rest assured that your next placement will move your career forward.</strong>
            </p>  
            <p className="about-us-page-intro-text">  
              <strong>We also offer support for teachers at every stage of your new placement. 
              From help with obtaining Police Clearances and insurance through to finding 
              travel discounts just for teachers!</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
