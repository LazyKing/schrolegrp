import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import { Well } from 'react-bootstrap';

class SchoolTypeList extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      school_type:[]
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps emergency", nextProps)
    if( nextProps.school_type){
      this.setState({school_type:nextProps.school_type});
    }
  }

  render() {
    const listItems = this.state.school_type.map((type) =>
            <Col key={type}>{type}</Col> );
    return (
        <Well>
        <h3>School Type</h3>
         <Row>
          {listItems}
         </Row>
        </Well>
    );
  }
}

export default SchoolTypeList;
