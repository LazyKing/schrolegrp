import React, { Component } from 'react';
import { Icon, Button } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import reducers from "../reducers";
import { logout } from "../actions";


class Logout extends Component {

  constructor(props) {
    super(props);
  }
 
  onLogout(e) {
  	//console.log(this.props.auth_token,this.props.user_email,);
  	const logoutPayloadHeader = { 'auth_token': this.props.auth_token, 'user_email': this.props.user_email }
  	this.props.logout(logoutPayloadHeader);
  }

  render() {
    return (
      <Button title="Log Out" onClick={this.onLogout.bind(this)}><Icon style={{'marginRight':'0px'}} type="logout" /></Button>
    );
  }
}

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout: logout }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Logout);
