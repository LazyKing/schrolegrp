import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form,
  Input, Icon } from 'antd';

const FormItem = Form.Item;

class LicenseCard extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    //console.log(this.props);
  }

  render() {
    return (
      <Col span={8} style={{'marginTop': 10, 'padding': 5 }}>
        <Card className="card-header-background" title={this.props.licence.country} extra={<div><Button className="edit_license" id={this.props.licence.id} onClick={this.props.onclick}>Edit</Button></div>}>
          <div>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Country of Registration</strong></span></Col>
              <Col><span>{this.props.licence.country}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Registration Number</strong></span></Col>
              <Col><span>{this.props.licence.registration_no}</span></Col>
             </Row>
          </div>
        </Card>
      </Col>
    );
  }
}

export default LicenseCard;
