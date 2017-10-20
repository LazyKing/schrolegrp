import React, { Component } from 'react';
import './App.css';

import { Form, FormGroup, Col, Checkbox, Button, FormControl, ControlLabel, Grid, Navbar } from 'react-bootstrap';

import { Link } from 'react-router'
import { connect } from "react-redux";
import { submitLogin } from "./actions/index";
import { bindActionCreators } from "redux";

import AppFooter from './AppFooter';

class LoginComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onPasswordChange(event) {
    this.setState({ password:event.target.value});
  }

  onEmailChange(event) {
    this.setState({ email:event.target.value});
  }

  onLogin(event) {
    console.log(this.state);
    this.props.submitLogin(this.state)
  }

  render() {
    return (
    <div className="AppHeader">
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><Link role="button" to="/">School</Link></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>    
      <Grid fluid={true} className="float-none col-sm-5 login-formControl-styles login-form-styles">
        <h3 className="col-sm-12 login-formControl-align">Welcome to Schol</h3>
        <Form className="col-sm-12">
          <FormGroup controlId="formHorizontalEmail" className="col-sm-12 login-formControl-align">
            <Col componentClass={ControlLabel} sm={12}>Email</Col>
            <Col sm={12}>
              <FormControl type="email" onChange={this.onEmailChange.bind(this)} placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword" className="col-sm-12 login-formControl-align">
            <Col componentClass={ControlLabel} sm={12}>Password</Col>
            <Col sm={12}>
              <FormControl type="password" onChange={this.onPasswordChange.bind(this)} placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup className="col-sm-12 login-formControl-align">
            <Col>
              <Button type="submit" onClick={this.onLogin.bind(this)}  bsStyle="primary">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
      <AppFooter />
      </div>  
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props
  // inside of BookList
  console.log(state);
  return {
    books: state.books,
    email: state.email,
    password: state.password
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ submitLogin: submitLogin }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
