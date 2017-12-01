import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Well } from 'react-bootstrap';

class SchoolInsuranceDetails extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      insurance_details:{
        medical:'',
        dental:'',
        disability:'',
        other:''
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps emergency", nextProps)
    if( nextProps.insurance_details){
      this.setState({insurance_details:nextProps.insurance_details});
    }
  }

  render() {
    return (
        <Well>
          <h3>Insurance</h3>
          <div>
             <Row type="flex" justify="space-between">
              <Col><span><strong>Medical:</strong></span></Col>
              <Col><span>{this.state.insurance_details.medical}</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Dental:</strong></span></Col>
              <Col><span>{this.state.insurance_details.dental}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Disability:</strong></span></Col>
              <Col><span>{this.state.insurance_details.disability}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Other:</strong></span></Col>
              <Col><span>{this.state.insurance_details.other}</span></Col>
            </Row>
          </div>
        </Well>
    );
  }
}

export default SchoolInsuranceDetails;
