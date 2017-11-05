import React, { Component } from 'react';
//import { Nav } from 'react-bootstrap';
import './App.css';

class AppFooter extends Component {
  render() {
    return (
      <footer className="">
        <header className="App-footer">
          <p className="App-title">Footer</p>
          <div className="footer-icons-container">
            <div className="footer-icons">
              <img src="https://png.icons8.com/twitter/color/24" title="Twitter" width="24" height="24" />
            </div>
            <div className="footer-icons">  
              <img src="https://png.icons8.com/facebook/color/24" title="Facebook" width="24" height="24" />
            </div>
            <div className="footer-icons">
              <img src="https://png.icons8.com/linkedin/color/24" title="LinkedIn" width="24" height="24" />
            </div>
            <div className="footer-icons">
              <img src="https://png.icons8.com/play-button/color/24" title="Play Button" width="24" height="24" />
            </div>
          </div>
        </header>
      </footer>
    );
  }
}

export default AppFooter;
