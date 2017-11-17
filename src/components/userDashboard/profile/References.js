import React, { Component } from 'react';
import { LocaleProvider, Row, Col } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

/*import components*/
import AcademicReferences from './references/AcademicReferences';
import AdministrativeReferences from './references/AdministrativeReferences';

class References extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    console.log(this.props);
  }

  render() {
    return (

        <LocaleProvider locale={enUS}>
        <div className="references-mainContainer">
          <Row className="">
            <h1> References </h1>
            <p>
              <strong>Important:</strong>
                Your referees will be contacted to provide a confidential reference.
                You may wish to let them know an email link will be sent to them,
                but sometimes this may be sent to the spam folder.
            </p>
            <Col>
              <li>The 'EDIT' button will appear next to referees that have not yet confirmed their details or completed their reference.</li>
              <li>A 'In Progress' label will appear next to referees that have confirmed their details and your relationship, but not yet completed your reference.</li>
              <li>Once a week has passed, if a referee has not confirmed their details or completed your reference, you will be able to send the referee a reminder email via the 'SEND REMINDER' button next to the referee.</li>
              <li>A 'Complete' label will appear next to referees once they have completed their reference.</li>
            </Col>
            <hr style={{ marginTop:'10px', border: '1px rgba(37, 132, 193, 0.9) solid' }}/>
          </Row>
          <Row>
            <Col sm={10} offset={1}>
              <AcademicReferences />
            </Col>
            <Col sm={10} offset={1}>
              <AdministrativeReferences />
            </Col>
          </Row>
        </div>
        </LocaleProvider>

    );
  }
}

export default References;
