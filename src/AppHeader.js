import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, Nav } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router'

import webLogo from './assets/IES_logo.png';

class AppHeader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab : 1
    };
  }

  handleSelect(selectedKey) {
    this.setState({activeTab:selectedKey});
  }

  render() {
    return (
      <div className="AppHeader">
      <Navbar collapseOnSelect className="navbar-fixed-top">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" style={{'width':100,'height':50,'padding':0}}>
              <img src={webLogo} title="Schrole_Connect" width="100" height="40"
              style={{'marginTop':5}} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

          </Nav>
          <Nav pullRight activeKey={this.state.activeTab} onSelect={this.handleSelect.bind(this)}>
            <NavItem eventKey={1} href="#"><Link role="button" to="/About">About</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link role="button" to="/Register">Register</Link></NavItem>
            <NavItem eventKey={3} href="#"><Link role="button" to="/JobBoard">Job Board</Link></NavItem>
            <NavItem eventKey={4} href="#"><Link role="button" to="/Login">Login</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default AppHeader;
