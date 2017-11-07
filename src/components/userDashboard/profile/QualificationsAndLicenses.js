import React, { Component } from 'react';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllQualificationsDetailsDispatch } from "../../../actions";

/*import components/modules*/
import AllQualifications from './qualificationsAndLicenses/AllQualifications';
import AllLicences from './qualificationsAndLicenses/AllLicences';

class QualificationAndLicenses extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      licences:[],
      qualifications:[]
    }
  }
  
  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    const response = this.props.getAllQualificationsDetailsDispatch(logoutPayloadHeader);
  }
  
  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps QualificationAndLicenses",nextProps);
    const { qualifications, licences } = nextProps.qualificationsDetails;
    this.setState({ qualifications, licences });
  }

  render() {
    return (
      <div className="qualification-mainContainer">
          <AllQualifications  qualificationsArray={this.state.qualifications}/>
          <AllLicences  licencesArray={this.state.licences}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps-qalifications",state);
  return { qualificationsDetails: state.applicants.qualificationsDetails};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllQualificationsDetailsDispatch: getAllQualificationsDetailsDispatch }, dispatch);
}


export default connect( mapStateToProps, mapDispatchToProps)(QualificationAndLicenses);