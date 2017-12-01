import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import { Well } from 'react-bootstrap';

class SchoolAddress extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      school_address:{
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps SchoolAddress", nextProps)
    if( nextProps.school_address){
      this.setState({ school_address:nextProps.school_address});
    }
  }

  render() {
    const { street_1='', street_2='', postal_code='', city='',country='' } = this.state.school_address;
    return (
        <Well>
          <h3>Address</h3>
          <div>
             <Row type="flex" justify="space-between">
              <Col><span><strong>Postal Address</strong></span></Col>
              <Col>
                <p>{street_1}</p>
                <p>{street_2}</p>
                <p>{postal_code}</p>
                <p>{city}</p>
                <p>{country}</p>
              </Col>
             </Row>
          </div>
        </Well>
    );
  }
}

export default SchoolAddress;
