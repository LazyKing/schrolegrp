import React, { Component } from 'react';
import { Button, Row, Col, Card } from 'antd';
import '../../stylesheets/userdashboard.css';
import '../../App.css';


class Schools extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    console.log(this.props);
  }

  render() {
    return (
      <div className="">
        <h1 style={{'textAlign': 'left','color': '#1968a5'}}>
          Registered Schools
        </h1>
        <div className="" style={{ background: '#ECECEC', padding: '30px' }} >
          <Row gutter={16}>
            <Col span={24}>
              <Card title="Schools" extra={<a href="#">View All</a>}>
                <div className="school-card-container">
                  <div className="school-card-name-container col-sm-12">
                    <div>
                      <h3>Schrole</h3>
                      <h4>Australia</h4>
                    </div>
                    <div>
                      <p>School Profile</p>
                      <p>School Website</p>
                    </div>
                  </div> 
                  <div className="school-card-actions-container">
                    <Button>Update Questions</Button>
                  </div>
                </div>   
              </Card>
            </Col>
          </Row>    
        </div>
      </div>
    );
  }
}

export default Schools;
