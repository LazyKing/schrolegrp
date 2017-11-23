import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form,
  Input, Icon } from 'antd';
const FormItem = Form.Item;

class AcademicReferencesCard extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    //console.log(this.props);
  }
/*        <Card className="card-header-background" title={this.props.experience.position} extra={<div><Button className="edit_experience" id={this.props.experience.id} onClick={this.props.onclick}>Edit</Button>
        <Button experienceid={this.props.experience.id} onClick={this.props.onExperienceDelete}><Icon type="delete" /></Button></div>}
        >*/
  render() {
    const { country='in', name_of_school='', from='', to='',
      school_level='' } = this.props.academicReference ? this.props.academicReference : {};
    return (
      <Col span={24} style={{'marginTop': 10,'padding': 5 }}>
      <Card className="card-header-background" title="peggy smith" extra={<div><Button className="edit_academic_reference" id={this.props.academicReference.id} onClick={this.props.onclick}>Edit</Button></div>}
      >
          <div>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Country</strong></span></Col>
              <Col><span>{country}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>School</strong></span></Col>
              <Col><span>{name_of_school}</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>From</strong></span></Col>
              <Col><span>{from}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>To</strong></span></Col>
              <Col><span>{to}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>School level</strong></span></Col>
              <Col><span>{school_level}</span></Col>
            </Row>
          </div>
        </Card>
      </Col>
    );
  }
}

export default AcademicReferencesCard;
