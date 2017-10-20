import React, { Component } from 'react';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import LoginComponent from './LoginComponentAnt';

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
