import React, { Component } from 'react';
import BookList from "./book-list";
import './App.css';

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

class MainDiv extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <div className="App height-fluid">
        <header className="App-header">
          <h1 className="App-title">Welcome to the website</h1>
        </header>
        <BookList />
        <p className="App-intro">
          Introduction
        </p>
      </div>
      </Provider>
    );
  }
}

export default MainDiv;
