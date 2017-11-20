import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import '../../App.css';


class Dashboard extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    console.log(this.props);
  }

  render() {
    return (
      <div className="">
        <h1 style={{'textAlign': 'left','color': '#1968a5', padding: '10px'}}>
          Welcome to your Schrole Dashboard
        </h1>
        <div className="" style={{ background: '#ECECEC', padding: '30px' }} >
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Registered Schools" extra={<a href="#">View All</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Recent Vacancies" extra={<a href="#">View All</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="My Applications" extra={<a href="#">View All</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
