import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import './App.css';

class AppHeader extends Component {

  /*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
    <MenuItem eventKey={3.1}>Action</MenuItem>
    <MenuItem eventKey={3.2}>Another action</MenuItem>
    <MenuItem eventKey={3.3}>Something else here</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey={3.3}>Separated link</MenuItem>
  </NavDropdown>*/
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
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Register</NavItem>
            <NavItem eventKey={1} href="#">Job Board</NavItem>
            <NavItem eventKey={2} href="#">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default AppHeader;
