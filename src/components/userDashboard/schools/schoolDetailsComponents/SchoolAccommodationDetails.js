import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Well } from 'react-bootstrap';

class SchoolAccommodationDetails extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      accomodation_details:{
        accomodation:'',
        flights:'',
        utilities:'',
        furniture:'',
        moving_allowance:''
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps emergency", nextProps)
    if( nextProps.accomodation_details){
      this.setState({accomodation_details:nextProps.accomodation_details});
    }
  }

  render() {
    return (
        <Well>
          <h3>Accommodation</h3>
          <div>
             <Row type="flex" justify="space-between">
              <Col><span><strong>Accomodation:</strong></span></Col>
              <Col><span>{this.state.accomodation_details.accomodation}</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Flights:</strong></span></Col>
              <Col><span>{this.state.accomodation_details.flights}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Utilities:</strong></span></Col>
              <Col><span>{this.state.accomodation_details.utilities}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Furniture:</strong></span></Col>
              <Col><span>{this.state.accomodation_details.furniture}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Moving Allowance:</strong></span></Col>
              <Col><span>{this.state.accomodation_details.moving_allowance}</span></Col>
            </Row>
          </div>
        </Well>
    );
  }
}

export default SchoolAccommodationDetails;
