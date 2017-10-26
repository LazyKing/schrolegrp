import React, { Component } from 'react';
import { Button, Row, Col, Card, Progress } from 'antd';

class BasicProfile extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="basic-profile-mainContainer">
          <div className="">
            <h1 style={{'textAlign': 'center','color': '#1968a5' }}>
                Connecting international schools with the best qualified teachers. Simply.
            </h1>
          </div>
          <div className="profile-basic-info-container">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Yellow Flower" style={{ height: 230 }}>

                </Card>
              </Col>
              <Col span={8}>
                <h2> Yellow Flower </h2>
              </Col>
              <Col span={8}>
                <Card className="profile-percentage-card" title="Profile Completion Status" >
                  <Progress type="circle" percent={75} />
                </Card>
              </Col>
            </Row>
          </div>
      </div>
    );
  }
}

export default BasicProfile;
