import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';

/*import components*/
import BasicContactDetails from './schoolDetailsComponents/BasicContactDetails';

class SchoolDetails extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    console.log(this.props);
  }

  render() {
    const { school_name='', telephone='', website='', vacancy_page='' } = this.props;
    return (
      <Row>
        <Col>
          <h2>School Name</h2>
          <p> Telephone: +61892307000 </p>
          <p>
            Website: http://www.schrole.com
          </p>
          <p>
            Public vacancy page: https://go.schrole.com/public/266/schrole
          </p>
        </Col>
        <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'margin': '10px 0px' }}/>
        <Col>
          <h2>School Information</h2>
          <BasicContactDetails />
        </Col>
      </Row>
    );
  }
}

export default SchoolDetails;
