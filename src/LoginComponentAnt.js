import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col, Card, Modal } from 'antd';
import {  Navbar } from 'react-bootstrap';

import 'antd/dist/antd.css';
import './App.css';

import {  browserHistory  } from 'react-router'

/*Redux imports*/
import { connect } from "react-redux";
import { submitLoginDispatch, forgotPassword, resetStore } from "./actions/index";
import { bindActionCreators } from "redux";

import AppFooter from './AppFooter';
import webLogo from './assets/Schrole_Connect.png';

const FormItem = Form.Item;

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps -- register",nextProps);
    if( nextProps.authenticationAndRegistration ) {
      const { registrationSuccessStatus } = nextProps.authenticationAndRegistration;
      if( registrationSuccessStatus !== "" ) {
        if ( registrationSuccessStatus !== 201 || registrationSuccessStatus !== 200  ){
          this.setState({loading:false});
          const { errorMessage, errorSummary } = nextProps.authenticationAndRegistration;
           const modal= Modal.error({
                title: errorSummary,
                content: errorMessage,
                okText: 'Ok',
                onOk() {
                   nextProps.resetStore('');
                },
              });
        }
      }
    }
  }

  componentDidMount() {
    //console.log(this.props)
  }

  onForgotPassword(event) {
    this.props.forgotPassword(this.state)
  }

  onLogin(event) {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { email, password } = this.props.form.getFieldsValue();
        this.setState({loading:true});
        this.props.submitLoginDispatch( email, password);
      }
    });
  }

  schoolSignUp() {
    browserHistory.push({
      pathname: '/RegisterSchool'
    });
    return true;
  }

  candidateSignUp(){
    browserHistory.push({
      pathname: '/RegisterApplicant'
    });
    return true;
  }

  renderLoginButtonText() {
    if(!this.state.loading) {
      return 'Log in';
    } else {
      return '';
    }

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div className="AppHeader">
      <div className="float-none col-sm-4 login-formControl-styles login-form-styles container-fluid">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
                <h3 className="col-sm-12 login-formControl-align">Welcome to Schol</h3>
            </FormItem>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input the password!',
                  }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
            </FormItem>
            <FormItem>
                <a id="forgotPassword" style={{ textAlign: 'right' }} className="login-form-forgot col-sm-12" onClick={this.onForgotPassword.bind(this)} href="javascript:void(0)">Forgot password</a>
                <Button type="primary" onClick={this.onLogin.bind(this)} htmlType="submit" className="login-form-button col-sm-12" loading={this.state.loading}>
                    {this.renderLoginButtonText()}
                </Button>
            </FormItem>
          </Form>
      </div>
      <h2 style={{'textAlign':'center'}}>Or haven't registered yet?</h2>
      <div style={{ padding: '30px' }}>
        <Row type="flex" justify="space-between">
          <Col span={10}>
            <Card style={{'textAlign':'center'}} title="CALLING all SCHOOLS" bordered={false}>
              <p>Are you a school looking to sign up for our services?
               Click below to go to our sign up page.</p>
               <Button onClick={this.schoolSignUp.bind(this)}>Sign Up</Button>
            </Card>
          </Col>
          <Col span={10}>
            <Card style={{'textAlign':'center'}} title="CALLING all CANDIDATES" bordered={false}>
              <p>Haven't got an account with Schrole yet? Want to get the Schrole Advantage?
               Sign up for Premium below.</p>
              <Button onClick={this.candidateSignUp.bind(this)}>Sign Up</Button>
            </Card>
          </Col>
        </Row>
      </div>
      <AppFooter />
    </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { authenticationAndRegistration: state.authenticationAndRegistration };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitLoginDispatch: submitLoginDispatch, forgotPassword:forgotPassword,
  resetStore:resetStore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginComponent));
