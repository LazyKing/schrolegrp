import React, { Component } from 'react';
import { LocaleProvider, Row, Col } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllReferencesDetailsDispatch } from "./references/References_Actions";

/*import components*/
import AcademicReferences from './references/AcademicReferences';
import AdministrativeReferences from './references/AdministrativeReferences';

class References extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      academic:[],
      administrativeReferences:[]
    }
  }

  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    const response = this.props.getAllReferencesDetailsDispatch(logoutPayloadHeader);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps QualificationAndLicenses",nextProps);
    const { academic } = nextProps.references;
    this.setState({ academic });
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
              <AcademicReferences academicReferences={this.state.academic}/>
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

function mapStateToProps(state) {
  //console.log("mapStateToProps-qalifications",state);
  return { references: state.applicants.references};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllReferencesDetailsDispatch }, dispatch);
}


export default connect( mapStateToProps, mapDispatchToProps)(References);
