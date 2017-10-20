import React, { Component } from 'react';
import './App.css';

//import { Provider } from "react-redux";
//import { createStore } from "redux";
//import reducers from "./reducers";

class About extends Component {
  render() {
    return (
      <div className="App height-fluid">
        <header className="App-header about-us-page-imageContainer">
          <div className="about-us-page-intro-text-container">
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
          </div>
        </header>
      </div>
    );
  }
}

export default About;
