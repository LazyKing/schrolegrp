import React, { Component } from 'react';
import { Row, Col, Alert, Button } from 'antd';
import {  browserHistory  } from 'react-router'
import '../../App.css';

/*import components*/
import DashboardSchoolList from './dashboardComponents/DashboardSchoolList';
import DashboardVanaciesList from './dashboardComponents/DashboardVanaciesList';
import DashboardApplicationsList from './dashboardComponents/DashboardApplicationsList';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSchoolDetailsDispatch } from "./School_Actions";

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'schoolProfile': {},
      'step_no': 1,
      'schoold_id': '',
      'new_registration': false,
      'details_updated': false
    };
  }

  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    const response = this.props.getSchoolDetailsDispatch(logoutPayloadHeader);
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps - Dashboard",nextProps);
    const { step_no, new_registration, id, details_updated } = nextProps.schoolProfile;
    this.setState({ 'schoolProfile': nextProps.schoolProfile, 'schoold_id':id, step_no, new_registration, details_updated });
  }

  continueSchoolUpdate = (props) => {
    // console.log(this.state.schoold_id);
    // console.log(this.state.step_no);
    // console.log(this.state.new_registration);
    const formContinueDetails = {
      schoold_id: this.state.schoold_id,
      step_no: this.state.step_no,
      new_registration: this.state.new_registration
    }
    browserHistory.push({
      pathname: '/SchoolRegisterBasicPage',
      state: { formContinueDetails }
    });
  }

  displayConfirmEmailAlertAlert () {
      return (
          <Row>
            <Col>
              <Alert
                style={{'margin': 5 }}
                message="Update Details"
                description="Your school profile details has not been updated.Click on update button to continue with the process and once updated you be able to view/edit the same in profile section"
                type="info"
                showIcon
              />
            </Col>
            <Col>
              <Button onClick={this.continueSchoolUpdate}>Continue to details</Button>
            </Col>
          </Row>
        ) ;
  }

  render() {
    return (
      <div className="">
        { (this.state.new_registration || this.state.details_updated) ? this.displayConfirmEmailAlertAlert() : '' }

        <h1 style={{'textAlign': 'left','color': '#1968a5', padding: '10px'}}>
          Welcome to your Schrole Dashboard
        </h1>
        <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'margin': '10px 0px' }}/>
        <div className="" style={{ background: '#ECECEC', padding: '30px' }} >
          <Row gutter={16}>
            <Col span={8}>
              <p style={{padding: '10px'}}>The 3 most recent schools you've registered with.</p>
              <DashboardSchoolList />
            </Col>
            <Col span={8}>
              <p style={{padding: '10px'}}>The 3 latest vacancies from schools you're registered with.</p>
              <DashboardVanaciesList />
            </Col>
            <Col span={8}>
              <p style={{padding: '10px'}}>The 3 most recent vacancies you have applied for.</p>
              <DashboardApplicationsList />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps school dasboard",state);
  const { schoolProfile } = state.schools;
  return { schoolProfile };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSchoolDetailsDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Dashboard);
