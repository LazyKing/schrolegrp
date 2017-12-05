import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import {  browserHistory  } from 'react-router'

/*import components*/
import DashboardApplicationsCard from './DashboardApplicationsCard';

class DashboardApplicationsList extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = { 'schools' : [ { 'id': 1, 'title': 'Remember why you became a teacher', 'location': 'Australia' },
                                  { 'id': 2, 'title': 'Remember why you became a teacher', 'location': 'India' } ]
    }
  }

  onApplicationsViewAll = (props) => {
    browserHistory.push({
      pathname: '/userprofile/application'
    });
  }

  render() {
    const listItems = this.state.schools.map((school) =>
            <DashboardApplicationsCard key={school.id} title={school.title} location={school.location} /> );
    return (
      <div className="dashboard-applicationsList-container">
        <div className="" style={{ background: '#ECECEC', padding: '15px' }} >
          <Row gutter={16}>
            <Col span={24}>
              <Row className="school-list-header" type="flex" justify="space-between">
                <Col><span><strong>My Applications</strong></span></Col>
                <Col><Button onClick={this.onApplicationsViewAll}>View All</Button></Col>
              </Row>
              {listItems}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DashboardApplicationsList;
