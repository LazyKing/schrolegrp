import React, { Component } from 'react';
import { Icon, Button } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutDispatch } from "../actions";


class Logout extends Component {

  constructor(props) {
    super(props);
  }

  onLogout(e) {
  	//console.log(this.props.auth_token,this.props.user_email,);
    const { auth_token, user_email} = this.props;
  	this.props.logoutDispatch(user_email, auth_token);
  }

  renderLogoutType() {
  	if( this.props.type === "button" ) {
  		return (
  			<Button title="Log Out" onClick={this.onLogout.bind(this)}>
  				<Icon style={{'marginRight':'0px'}} type="logout" />
  			</Button>
  		);
  	} else if ( this.props.type === "menuItem" ) {
  		return (
  			<ul title="Search" onClick={this.onLogout.bind(this)}><Icon type="logout" />Log out</ul>
  		);
  	} else {

  	}
  }

  render() {
    return (
      this.renderLogoutType()
    );
  }
}

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Logout);
