import React, { Component } from 'react';
import { Button, Row, Col, Card, Progress, LocaleProvider } from 'antd';

import PersonalDetails from './basicProfile/PersonalDetails';
import ContactDetails from './basicProfile/ContactDetails';
import Dependents from './basicProfile/Dependents';
import enUS from 'antd/lib/locale-provider/en_US';

/*temproary*/
import profilePic from '../../../assets/feature_1.jpg';

class BasicProfile extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
  }

  render() {
    return (
      <div className="basic-profile-mainContainer">
          <div className="profile-basic-info-container">
            <Row gutter={16}>
              <Col xs={0} sm={10} md={8} lg={8}>
                <Card title="Yellow Flower" style={{ height: 350 }}>
                  <img style={{ width: '100%' }} src={profilePic} />
                </Card>
              </Col>
              <Col xs={0} sm={14} md={8} lg={8} >
                <div style={{ height: 230 }}>
                  <div className="basic-profile-header">
                    <h2> Yellow Flower </h2>
                    <Button> Edit </Button>
                  </div>
                  <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid' }}/>
                </div>  
              </Col>
              <Col md={8} lg={8} className="hidden-sm hidden-xs">
                <Card className="profile-percentage-card" title="Profile Completion Status" >
                  <Progress type="circle" percent={80} />
                </Card>
              </Col>
            </Row>
          </div>
          <hr style={{ marginTop:'10px', border: '1px rgba(37, 132, 193, 0.9) solid' }}/>
          <LocaleProvider  locale={enUS}>
            <div className="profile-details-container">
              <Row gutter={16}>
                <Col xs={0} sm={9} lg={8}>
                  <PersonalDetails />
                </Col>
                <Col xs={0} sm={9} lg={8}>
                  <Dependents />
                </Col>
                <Col xs={0} sm={6} lg={8} className="hidden-sm-down" >
                  <ContactDetails />
                </Col>
              </Row>
            </div>
          </LocaleProvider>
      </div>
    );
  }
}

export default BasicProfile;
