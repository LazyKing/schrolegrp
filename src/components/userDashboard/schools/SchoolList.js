import React, { Component } from 'react';
import { Row, Col } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSchoolListDispatch } from "./Schools_Actions";

import SchoolCard from './SchoolCard';

class SchoolList extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state ={
      'schoolList': []
    };
  }

  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    const response = this.props.getSchoolListDispatch(logoutPayloadHeader);
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps - schoollist",nextProps);
    if( nextProps.schoolList ) {
      const { schoolList } = nextProps;
      this.setState({ schoolList });
    }
  }

  render() {
    const listItems = this.state.schoolList.map((school) =>
            <SchoolCard key={school.id} title={school.school_name} location={school.location} /> );
    return (
      <div className="">
        <h1 style={{'textAlign': 'left','color': '#1968a5' , padding: '10px' }}>
          Registered Schools
        </h1>
        <div className="" style={{ background: '#ECECEC', padding: '30px' }} >
          <Row gutter={16}>
            <Col span={24}>
              <Row className="school-list-header" type="flex" justify="space-between">
                <Col><span><strong>Schools</strong></span></Col>
                <Col><span><strong>Results:2</strong></span></Col>
              </Row>
              {listItems}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps school dasboard",state);
  return { schoolList: state.applicants.schools };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSchoolListDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(SchoolList);
