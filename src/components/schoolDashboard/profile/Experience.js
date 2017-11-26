import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllExperiencesDetailsDispatch } from "./experiences/Experiences_Actions";

/*import components/modules*/
import AllExperiences from './experiences/AllExperiences';

class Experience extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    //console.log(this.props);
    this.state = {
      experiences:[]
    }
  }

  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    const response = this.props.getAllExperiencesDetailsDispatch(logoutPayloadHeader);
  }
  
  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps AllExperiences",nextProps);
    const { experiences } = nextProps.experiencesDetails;
    this.setState({ experiences });
  }

  render() {
    return (
      <div className="experience-mainContainer">
        <LocaleProvider locale={enUS}>
          <AllExperiences  experiencesArray={this.state.experiences}/>
        </LocaleProvider>
      </div>
    );
  }
}
function mapStateToProps(state) {
  //console.log("mapStateToProps-qalifications",state);
  return { experiencesDetails: state.applicants.experiences};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllExperiencesDetailsDispatch: getAllExperiencesDetailsDispatch }, dispatch);
}


export default connect( mapStateToProps, mapDispatchToProps)(Experience);
