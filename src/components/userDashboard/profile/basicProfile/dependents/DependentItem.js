import React, { Component } from 'react';
import { Button, Row, Col, Card, Icon } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteDependantDispatch } from "../../../../../actions";

class DependentItem extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    }
  
  removeDependent = (event) => {
    const { target } = event;
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    this.props.deleteDependantDispatch( logoutPayloadHeader, target.id);
  }

  render() {
    const { dependent } = this.props;
    return (
        <Row type="flex" justify="space-between">
          <Col><span>{dependent.name} ({dependent.gender})</span></Col>
          <Col><Button id={dependent.id} onClick={this.removeDependent}>Delete</Button></Col>
        </Row>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps",state);
  return { dependentsArray: state.applicants.applicantsProfile.dependents };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteDependantDispatch: deleteDependantDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(DependentItem);
