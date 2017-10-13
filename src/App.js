import React, { Component } from 'react';
import logo from './logo.svg';
import AppHeader from './AppHeader';
/*import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'*/
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        {this.props.children}
      </div>
    );
  }
}

export default App;
