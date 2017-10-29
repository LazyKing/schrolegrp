import React, { Component } from 'react';
import { Button, Row, Col, Card } from 'antd';
import '../../stylesheets/userdashboard.css';
import '../../App.css';

import SchoolCard from './schools/SchoolCard';

class Schools extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = { 'schools' : [ { 'id': 1, 'title': 'test2', 'location': 'Australia' }, 
                                  { 'id': 2, 'title': 'test3', 'location': 'India' } ]
    }
  }

  render() {
    const listItems = this.state.schools.map((school) =>
            <SchoolCard key={school.id} title={school.title} location={school.location} /> );
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

export default Schools;
