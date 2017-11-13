import React, { Component } from 'react';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getExtraInfoBsicDetailsDispatch } from "./extraInfoAndDocs/ExtraInforAndDocs_Actions";

/*import components over here*/
import ExtraInfoBasicFormContainer from './extraInfoAndDocs/ExtraInfoBasicFormContainer';

class ExtraInformation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      extraInfoDetails: {}
    };
    //console.log(this.props);
  }

  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    const response = this.props.getExtraInfoBsicDetailsDispatch(logoutPayloadHeader);
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps ExtraInformation", nextProps)
    const { extraInfoDetails } = nextProps;
    this.setState({ extraInfoDetails });
  }

  render() {
    return (
      <div className="extraInformation-mainContainer">
          <div className="">
            <ExtraInfoBasicFormContainer extraInfoDetails={this.state.extraInfoDetails}/>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps, extrainfo",state);
  return { extraInfoDetails:  state.applicants.extraInfo };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getExtraInfoBsicDetailsDispatch: getExtraInfoBsicDetailsDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(ExtraInformation);
