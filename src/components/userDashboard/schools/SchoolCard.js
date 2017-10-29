import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import '../../../stylesheets/userdashboard.css';
import '../../../App.css';


class SchoolCard extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    console.log(this.props);
  }

  render() {
    return (
      <Row className="school-card-listItem" >  
        <Col className="school-card-container">
          <Row type="flex" justify="space-between" className="school-card-name-container col-sm-12">
            <Col>
              <h3>{this.props.title}</h3>
              <h4>{this.props.location}</h4>
            </Col>
            <Col>
              <p>School Profile</p>
              <p>School Website</p>
            </Col>
          </Row> 
          <Row className="school-card-actions-container">
            <Button>Update Questions</Button>
          </Row>
        </Col>   
      </Row>  
    );
  }
}

export default SchoolCard;
