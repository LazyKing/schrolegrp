import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import {  browserHistory  } from 'react-router'

/*import components*/
import DashboardSchoolCard from './DashboardSchoolCard';

class DashboardSchoolList extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = { 'schools' : [ { 'id': 1, 'title': 'test2', 'location': 'Australia' },
                                  { 'id': 2, 'title': 'test3', 'location': 'India' } ]
    }
  }

  onSchoolViewAll = (props) => {
    browserHistory.push({
      pathname: '/userprofile/schools'
    });
  }

  render() {
    const listItems = this.state.schools.map((school) =>
            <DashboardSchoolCard key={school.id} title={school.title} location={school.location} /> );
    return (
      <div className="">
        <div className="" style={{ background: '#ECECEC', padding: '15px' }} >
          <Row gutter={16}>
            <Col span={24}>
              <Row className="school-list-header" type="flex" justify="space-between">
                <Col><span><strong>Registered Scools</strong></span></Col>
                <Col><Button onClick={this.onSchoolViewAll}>View All</Button></Col>
              </Row>
              {listItems}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DashboardSchoolList;
