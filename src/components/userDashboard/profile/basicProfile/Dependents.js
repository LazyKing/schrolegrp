import React, { Component } from 'react';
import { Button, Row, Col, Card, Icon } from 'antd';

class Dependents extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    }
  
  render() {
    return (
        <Card title="Dependents" extra={<div><Button>Add Dependent</Button><Button>No</Button></div>}>
          <div>
            <Row type="flex" justify="start">
              <Col><span>Storm White</span></Col>
            </Row>
             <Row type="flex" justify="space-between">
              <Col><span><strong>Phone Number</strong></span></Col>
              <Col><span>9991113339</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><strong>Rebecca White (Daughter)</strong></Col>
            </Row>
            <Row>
              <Col sm={24}><span><Icon type="mail" />yellowflower26@hotmail.com</span></Col>
              <Col sm={24}><span><Icon type="phone" />8881110003</span></Col>
            </Row>
          </div>
        </Card>
    );
  }
}

export default Dependents;
