import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCurrentSchoolDetailsDispatch } from "./Schools_Actions";

/*import components*/
import BasicContactDetails from './schoolDetailsComponents/BasicContactDetails';
import SchoolAddress from './schoolDetailsComponents/SchoolAddress';
import SchoolTypeList from './schoolDetailsComponents/SchoolTypeList';
import SchoolCurriculum from './schoolDetailsComponents/SchoolCurriculum';
import SchoolAccreditationList from './schoolDetailsComponents/SchoolAccreditationList';
import SchoolAccommodationDetails from './schoolDetailsComponents/SchoolAccommodationDetails';
import SchoolInsuranceDetails from './schoolDetailsComponents/SchoolInsuranceDetails';
import SchoolGeneralDetails from './schoolDetailsComponents/SchoolGeneralDetails';
import SchoolVacanciesList from './schoolDetailsComponents/vacancyComponents/SchoolVacanciesList';

class SchoolDetails extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      'schoolDetails': {},
      'contactDetails': {},
      'schoolAddress': {},
      'schoolType': [],
      'schoolCurriculum': [],
      'schoolAccreditation': [],
      'schoolAccommodation': {},
      'schoolInsuranceDetails': {},
      'schoolGeneralDetails': {}
    };
  }

  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    if( this.props.params && this.props.params.id) {
        this.props.getCurrentSchoolDetailsDispatch(logoutPayloadHeader, this.props.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps - schoollist",nextProps);
    if( nextProps.schoolDetails ) {
      const { schoolDetails } = nextProps;
      /*process Data*/
      const { fax='', phone='',skype='',
    street_1='', street_2='', postal_code='', city='',country='',
   school_type=[], school_curriculum=[], school_accreditation= [] } = schoolDetails;

      const contactDetails = { fax, phone, skype};
      const schoolAddress = { street_1, street_2, postal_code, city, country};
      const schoolType = []; //{ school_type }
      const schoolCurriculum = []; //{ school_curriculum }
      const schoolAccreditation = []; //{ school_accreditation }
      const schoolAccommodation = { }; //{ accomodation deatils goes here}
      const schoolInsuranceDetails = {}; // { schoolInsuranceDetails goes here }
      const schoolGeneralDetails = {}; // { schoolGeneralDetails goes here }

      this.setState({ schoolDetails, contactDetails, schoolAddress, schoolType, schoolCurriculum,
        schoolAccreditation, schoolAccommodation, schoolInsuranceDetails, schoolGeneralDetails });
    }
  }

  render() {
    const { school_name='', phone='', website='', vacancy_page='' } = this.state.schoolDetails;
    return (
    <div>
      <Row gutter={16}>
        <Col>
          <h2>{school_name}</h2>
          <p> Telephone: {phone} </p>
          <p>
            Website: <a href={website} target="_blank">{website}</a>
          </p>
          <p>
            Public vacancy page: {vacancy_page}
          </p>
        </Col>
        <h2>School Information</h2>
        <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'margin': '10px 0px' }}/>
        <Col sm={6}>
          <BasicContactDetails contact_details={this.state.contactDetails} />
        </Col>
        <Col sm={6}>
          <SchoolAddress school_address={this.state.schoolAddress} />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col sm={6}>
          <SchoolTypeList school_type={this.state.schoolType}/>
        </Col>
        <Col sm={6}>
          <SchoolCurriculum school_curriculum={this.state.schoolCurriculum}/>
        </Col>
        <Col sm={6}>
          <SchoolAccreditationList school_accreditation={this.state.schoolAccreditation}/>
        </Col>
      </Row>
      <h2>School Information for Candidates</h2>
      <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'margin': '10px 0px' }}/>
      <Row gutter={16}>
        <Col sm={24}>
          <SchoolAccommodationDetails accomodation_details={this.state.schoolAccommodation}/>
        </Col>
        <Col sm={24}>
          <SchoolInsuranceDetails insurance_details={this.state.schoolInsuranceDetails}/>
        </Col>
        <Col sm={24}>
          <SchoolGeneralDetails general_details={this.state.schoolGeneralDetails}/>
        </Col>
      </Row>
      <h2>Vacancy Information</h2>
      <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'margin': '10px 0px' }}/>
      <SchoolVacanciesList school_id={this.props.params.id}/>
    </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps school details",state);
  return { schoolDetails: state.applicants.schoolDetails };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCurrentSchoolDetailsDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(SchoolDetails);
