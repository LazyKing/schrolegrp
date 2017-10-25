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
  	//localStorage.removeItem("userprofile");
  	this.props.logout(this.props.auth_token);
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
