import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import { Well } from 'react-bootstrap';

class SchoolCurriculum extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      school_curriculum:[]
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps emergency", nextProps)
    if( nextProps.school_type){
      this.setState({school_curriculum:nextProps.school_curriculum});
    }
  }

  render() {
    const listItems = this.state.school_curriculum.map((type) =>
            <Col key={type}>{type}</Col> );
    return (
        <Well>
        <h3>Curriculum</h3>
         <Row>
          {listItems}
         </Row>
        </Well>
    );
  }
}

export default SchoolCurriculum;
