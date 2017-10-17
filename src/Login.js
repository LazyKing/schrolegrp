import React, { Component } from 'react';
import './App.css';

import { Form, FormGroup, Col, Checkbox, Button, FormControl, ControlLabel } from 'react-bootstrap';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import LoginComponent from './LoginComponent';

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";


class Login extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>  
        <LoginComponent />
      </Provider>  
    );
  }
}

export default Login;
