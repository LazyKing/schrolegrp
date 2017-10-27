import React, { Component } from 'react';
import { Button, Row, Col, Card } from 'antd';

class PersonalDetails extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    }
  
  render() {
    return (
        <Card title="Personal Details" extra={<div><Button>Edit</Button></div>}>
          <div>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Country of Citizenship</strong></span></Col>
              <Col><span>United States of America</span></Col>
            </Row>
             <Row type="flex" justify="space-between">
              <Col><span><strong>Country of Birth</strong></span></Col>
              <Col><span>United States of America</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>EU Passport</strong></span></Col>
              <Col><span>No</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Date of Birth</strong></span></Col>
              <Col><span>22/12/1974</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Gender</strong></span></Col>
              <Col><span>Female</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Marital status</strong></span></Col>
              <Col><span>Single</span></Col>
            </Row>
          </div>
        </Card>
    );
  }
}

export default PersonalDetails;
