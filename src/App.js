import React, { Component } from 'react';
import logo from './logo.svg';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="height-fluid">
        <AppHeader />
        <div>
          {this.props.children}
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default App;
