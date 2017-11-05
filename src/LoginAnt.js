import React, { Component } from 'react';

import LoginComponent from './LoginComponentAnt';

import { Provider } from "react-redux";
import { createStore } from "redux";
import authenticationAndRegistration from "./reducers";


class Login extends Component {
  render() {
    return (
      <Provider store={createStore(authenticationAndRegistration)}>  
        <LoginComponent />
      </Provider>  
    );
  }
}

export default Login;
