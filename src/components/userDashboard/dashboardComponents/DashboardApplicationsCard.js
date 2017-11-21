import React, { Component } from 'react';
import { Button, Row, Col, Card } from 'antd';

class DashboardApplicationsCard extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    //console.log(this.props);
  }

  render() {
    const { title='Schrole', location='Australia' } = this.props;
    return (
        <Card className="dashboard-card">
          <Col className="school-card-container">
            <Row type="flex" justify="space-between" className="school-card-name-container col-sm-12">
              <Col>
                <p>{title}</p>
                <p>{location}</p>
              </Col>
            </Row>
            <Row className="school-card-actions-container">
              <Button>View Details</Button>
            </Row>
          </Col>
        </Card>
    );
  }
}

export default DashboardApplicationsCard;
