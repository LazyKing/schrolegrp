import React, { Component } from 'react';
import { Button, Row, Col, Card, Icon } from 'antd';

class ContactDetails extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    }
  
  render() {
    return (
        <Card title="Contact Details" extra={<div><Button>Edit</Button></div>}>
          <div>
            <Row type="flex" justify="start">
              <Col><span><Icon type="mail" />yellowflower26@hotmail.com</span></Col>
            </Row>
             <Row type="flex" justify="space-between">
              <Col><span><strong>Phone Number</strong></span></Col>
              <Col><span>9991113339</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Skype Address</strong></span></Col>
              <Col><span>caprinahsky</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Permanent Address</strong></span></Col>
              <Col><span>1000 Stevens Entry, Peachtree City,30269,United States of America</span>
              </Col>
            </Row>
          </div>
        </Card>
    );
  }
}

export default ContactDetails;
