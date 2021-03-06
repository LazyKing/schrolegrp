import React, { Component } from 'react';

/*Bootstrap and ant compoennts*/
import {  Navbar } from 'react-bootstrap';
import { Alert } from 'antd';

/*routing and redux*/
import { browserHistory } from 'react-router'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import authenticationAndRegistration from "../../reducers";

import webLogo from '../../assets/IES_logo.png';

class LoginAndRegistrationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirmEmailAlert: false,
      alertDescription:'',
      alertMessage:'',
    };
  }

  componentDidMount() {
    //console.log(this.props.location)
    if ( this.props.location.query && this.props.location.query.confirmLogin
      && this.props.location.query.confirmLogin === 'true' ) {
      this.setState({
        showConfirmEmailAlert: true,
        alertMessage: 'Email confirmed successfully',
        alertDescription: 'Your email has been confirmed.Please login to continue.'
      });
    } else if ( this.props.location.query && this.props.location.query.unlock
      && this.props.location.query.unlock === 'true' ) {
        this.setState({
          showConfirmEmailAlert: true,
          alertMessage: 'Account Unlocked',
          alertDescription: 'Please Login to continue'
        });
      }
  }

  routeToHome(event) {
    event.preventDefault();
    event.stopPropagation();
    browserHistory.push({
        pathname: '/'
    });

  }

  displayConfirmEmailAlertAlert () {
      return ( <Alert
        style={{'margin': 5 }}
        message={this.state.alertMessage}
        description={this.state.alertDescription}
        type="success"
        showIcon
        closable
      /> ) ;
  }
  render() {
    return (
      <Provider store={createStore(authenticationAndRegistration, applyMiddleware(thunk))}>
	      <div>
	        <Navbar collapseOnSelect>
	            <Navbar.Header>
	              <Navbar.Brand>
	                <a onClick={this.routeToHome} href="javascript.void(0)" style={{'width':100,'height':50,'padding':0}}>
	                    <img src={webLogo} alt="not found" title="Schrole_Connect" width="100" height="40"
                      style={{'marginTop':5}} />
	                </a>
	              </Navbar.Brand>
	              <Navbar.Toggle />
	            </Navbar.Header>
	        </Navbar>

          { (this.state.showConfirmEmailAlert) ? this.displayConfirmEmailAlertAlert() : '' }
	        {this.props.children}

	      </div>
      </Provider>
    );
  }
}

export default LoginAndRegistrationContainer;
