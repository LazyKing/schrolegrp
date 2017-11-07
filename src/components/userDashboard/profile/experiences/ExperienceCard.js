import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form, 
  Input, Icon } from 'antd';

const FormItem = Form.Item;

class ExperienceCard extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    //console.log(this.props);
  }
  
/*  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps emergency", nextProps)
    this.setState({emergency_contact:nextProps.emergency_contact})
  }

  componentDidMount() {
    //this.props
  }*/
experience
  render() {
    return (      
      <Col span={8} style={{'marginTop': 10 }}>
        <Card title={this.props.experience.position} extra={<div><Button id={this.props.experience.id} onClick={this.props.onclick}>Edit</Button></div>}>
          <div>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Country</strong></span></Col>
              <Col><span>{this.props.experience.country}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>School</strong></span></Col>
              <Col><span>{this.props.experience.name_of_school}</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>From</strong></span></Col>
              <Col><span>{this.props.experience.from}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>To</strong></span></Col>
              <Col><span>{this.props.experience.to}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>School level</strong></span></Col>
              <Col><span>{this.props.experience.school_level}</span></Col>
            </Row>
          </div>
        </Card>
      </Col>
    );
  }
}

export default ExperienceCard;
