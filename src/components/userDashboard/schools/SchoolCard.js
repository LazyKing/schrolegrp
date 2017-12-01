import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import {Link} from 'react-router';
import '../../../stylesheets/userdashboard.css';
import '../../../App.css';


class SchoolCard extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    //console.log(this.props);
  }

  render() {
    return (
      <Row className="school-card-listItem" >
        <Col className="school-card-container">
          <Row type="flex" justify="space-between" className="school-card-name-container col-sm-12">
            <Col>
              <h3 className="schoolName">{this.props.title}</h3>
              <h4 className="country">{this.props.schoolDetails.country}</h4>
            </Col>
            <Col>
              <p>
                <Link to={'/userprofile/schools/' + this.props.schoolDetails.id}>School Profile</Link>
              </p>
              <p>
                <a href={this.props.schoolDetails.website} target="_blank">School Website</a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
/*
<Row className="school-card-actions-container">
  <Button>Update Questions</Button>
</Row>*/
export default SchoolCard;
