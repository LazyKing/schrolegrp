import React, { Component } from 'react';
//import BookList from "./book-list";
import './App.css';

//import { Provider } from "react-redux";
//import { createStore } from "redux";
//import reducers from "./reducers";

class About extends Component {
  render() {
    return (
      <div className="App height-fluid">
        <header className="App-header">
          <h1 style={{'text-align': 'center'}}>
            <span style={{'color': '#1968a5'}}>
              Connecting international schools with the best qualified teachers. Simply.
            </span>
          </h1>
          <div>
              <p style={{'text-align': 'center','color': '#333333'}}>
                <strong>
                  Schrole Connect’s unique software solutions help to attract and match the best qualified teachers with hard to fill roles in international schools. 
                  Reducing recruitment time and costs.<br />
                </strong>
              </p>
      </div>

        </header>
        <p className="App-intro">
          Introduction
        </p>
      </div>
    );
  }
}

export default About;
