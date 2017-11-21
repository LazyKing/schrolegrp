import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import '../../App.css';

/*import components*/
import DashboardSchoolList from './dashboardComponents/DashboardSchoolList';
import DashboardVanaciesList from './dashboardComponents/DashboardVanaciesList';
import DashboardApplicationsList from './dashboardComponents/DashboardApplicationsList';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    //console.log(this.props);
  }

  render() {
    return (
      <div className="">
        <h1 style={{'textAlign': 'left','color': '#1968a5', padding: '10px'}}>
          Welcome to your Schrole Dashboard
        </h1>
        <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'margin': '10px 0px' }}/>
        <div className="" style={{ background: '#ECECEC', padding: '30px' }} >
          <Row gutter={16}>
            <Col span={8}>
              <DashboardSchoolList />
            </Col>
            <Col span={8}>
              <DashboardVanaciesList />
            </Col>
            <Col span={8}>
              <DashboardApplicationsList />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
