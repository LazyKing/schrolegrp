import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {  Navbar } from 'react-bootstrap';

import 'antd/dist/antd.css';
import './App.css';

import { Link } from 'react-router'
import { connect } from "react-redux";
import { submitLogin, registerUser, forgotPassword } from "./actions/index";
import { bindActionCreators } from "redux";

import AppFooter from './AppFooter';
import webLogo from './assets/Schrole_Connect.png';

const FormItem = Form.Item;

class testReflux extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      registration: false
    };
  }

  onEmailChange(event) {
    this.setState({ email:event.target.value});
  }
  
  onPasswordChange(event) {
    this.setState({ password:event.target.value});
  }

  onPasswordConfirmChange(event) {
    this.setState({ passwordConfirm:event.target.value});
  }

  onForgotPassword(event) {
    this.props.forgotPassword(this.state)
  }

  onRegisterNow(event) {
    this.setState({registration:!this.state.registration});
  }

  onLogin(event) {
    console.log(this.state);
    if (this.state.registration)
        this.props.registerUser(this.state)
    else
        this.props.submitLogin(this.state)
  }

  render() {

    return (
    <div className="AppHeader">    

        <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#" style={{'width':200,'height':50,'padding':0}}>
                    <img src={webLogo} title="Schrole_Connect" width="200" height="50" />
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
        </Navbar>

      <div className="float-none col-sm-4 login-formControl-styles login-form-styles container-fluid">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
                <h3 className="col-sm-12 login-formControl-align">Welcome to Schol</h3>
            </FormItem>
            <FormItem>
                <Input onChange={this.onEmailChange.bind(this)} prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            </FormItem>
            <FormItem>
                <Input onChange={this.onPasswordChange.bind(this)} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            </FormItem>
            <FormItem style={{ 'display': (this.state.registration) ? 'block' : 'none' }}>
                <Input onChange={this.onPasswordConfirmChange.bind(this)} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Confirm Password" />
            </FormItem>
            <FormItem>
                <a id="forgotPassword" style={{ textAlign: 'right', 'display': (this.state.registration) ? 'none' : 'block' }} className="login-form-forgot col-sm-12" onClick={this.onForgotPassword.bind(this)} href="javascript:void(0)">Forgot password</a>
                <Button type="primary" onClick={this.onLogin.bind(this)} htmlType="submit" className="login-form-button col-sm-12">
                    {this.state.registration ? 'Register' : 'Log in'}
                </Button>
                <a className="col-sm-12" onClick={this.onRegisterNow.bind(this)} href="javascript:void(0)">{this.state.registration ? 'Go back to Login Page' : 'Register now!'}</a>
            </FormItem>
          </Form>
      </div>
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
    email: state.email,
    password: state.password
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ submitLogin: submitLogin, registerUser:registerUser , forgotPassword:forgotPassword }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(testReflux);