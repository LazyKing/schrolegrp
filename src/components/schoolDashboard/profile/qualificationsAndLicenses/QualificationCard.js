import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form,
  Input, Icon } from 'antd';

const FormItem = Form.Item;

class QualificationCard extends Component {

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

  render() {
    return (
      <Col span={8} style={{'marginTop': 10,'padding': 5 }}>
        <Card className="card-header-background" title={this.props.qualification.name} extra={<div>
          <Button className="edit_qualification" id={this.props.qualification.id} onClick={this.props.onclick}>Edit</Button>
          <Button qualificationid={this.props.qualification.id} onClick={this.props.onQualificationDelete}><Icon type="delete" /></Button></div>}
          >
          <div>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Country</strong></span></Col>
              <Col><span>{this.props.qualification.country}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Date of completion</strong></span></Col>
              <Col><span>{this.props.qualification.date_of_completion}</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Duration</strong></span></Col>
              <Col><span>{this.props.qualification.duration}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Place of study</strong></span></Col>
              <Col><span>{this.props.qualification.place_of_study}</span></Col>
            </Row>
          </div>
        </Card>
      </Col>
    );
  }
}

export default QualificationCard;
