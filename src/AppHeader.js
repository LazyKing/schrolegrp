import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import './App.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class AppHeader extends Component {
  render() {
    return (
      <div className="AppHeader">
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">School</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#"><Link role="button" to="/About">About</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link role="button" to="/Register">Register</Link></NavItem>
            <NavItem eventKey={1} href="#"><Link role="button" to="/JobBoard">Job Board</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link role="button" to="/Login">Login</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default AppHeader;
