import React, { Component } from 'react';
import './App.css';

import { Form, FormGroup, Col, Checkbox, Button, FormControl, ControlLabel } from 'react-bootstrap';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class Login extends Component {
  render() {
    return (
        <Form horizontal className="">
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={4}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={4}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup sm={11}>
            <Col smOffset={2} sm={8}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup sm={11}>
            <Col smOffset={2} sm={8}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
    );
  }
}

export default Login;
