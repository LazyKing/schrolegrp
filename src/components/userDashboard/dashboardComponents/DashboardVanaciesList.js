import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import {  browserHistory  } from 'react-router'

/*import components*/
import DashboardVacanciesCard from './DashboardVacanciesCard';

class DashboardVanaciesList extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = { 'schools' : [ { 'id': 1, 'title': 'test2', 'location': 'Australia' },
                                  { 'id': 2, 'title': 'test3', 'location': 'India' } ]
    }
  }

  onVacanciesViewAll = (props) => {
    browserHistory.push({
      pathname: '/userprofile/vacancies'
    });
  }

  render() {
    const listItems = this.state.schools.map((school) =>
            <DashboardVacanciesCard key={school.id} title={school.title} location={school.location} /> );
    return (
      <div className="dashboard-vacancyList-container">
        <div className="" style={{ background: '#ECECEC', padding: '15px' }} >
          <Row gutter={16}>
            <Col span={24}>
              <Row className="school-list-header" type="flex" justify="space-between">
                <Col><span><strong>Recent Vacancies</strong></span></Col>
                <Col><Button onClick={this.onVacanciesViewAll}>View All</Button></Col>
              </Row>
              {listItems}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DashboardVanaciesList;
