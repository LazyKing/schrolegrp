import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import { Well } from 'react-bootstrap';

class SchoolAccreditationList extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      school_accreditation:[]
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps emergency", nextProps)
    if( nextProps.school_accreditation){
      this.setState({school_accreditation:nextProps.school_accreditation});
    }
  }

  render() {
    const listItems = this.state.school_accreditation.map((type) =>
            <Col key={type}>{type}</Col> );
    return (
        <Well>
        <h3>School Accreditation</h3>
         <Row>
          {listItems}
         </Row>
        </Well>
    );
  }
}

export default SchoolAccreditationList;
