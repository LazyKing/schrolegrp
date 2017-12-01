import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Well } from 'react-bootstrap';

class SchoolGeneralDetails extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      general_details:{
        number_of_contract_days:'',
        starting_salary_range:'',
        taxes:'',
        savings_potential:''
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps emergency", nextProps)
    if( nextProps.general_details){
      this.setState({general_details:nextProps.general_details});
    }
  }

  render() {
    return (
        <Well>
          <h3>General</h3>
          <div>
             <Row type="flex" justify="space-between">
              <Col><span><strong>Number of Contract days:</strong></span></Col>
              <Col><span>{this.state.general_details.number_of_contract_days}</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Starting Salary Range:</strong></span></Col>
              <Col><span>{this.state.general_details.starting_salary_range}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Taxes:</strong></span></Col>
              <Col><span>{this.state.general_details.taxes}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Savings Potential:</strong></span></Col>
              <Col><span>{this.state.general_details.savings_potential}</span></Col>
            </Row>
          </div>
        </Well>
    );
  }
}

export default SchoolGeneralDetails;
