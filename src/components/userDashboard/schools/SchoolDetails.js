import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCurrentSchoolDetailsDispatch } from "./Schools_Actions";

/*import components*/
import BasicContactDetails from './schoolDetailsComponents/BasicContactDetails';
import SchoolAddress from './schoolDetailsComponents/SchoolAddress';

class SchoolDetails extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      'schoolDetails': {},
      'contactDetails': {},
      'schoolAddress': {}
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
    street_1='', street_2='', postal_code='', city='',country='' } = schoolDetails;
      const contactDetails = { fax, phone, skype};
      const schoolAddress = { street_1, street_2, postal_code, city, country};

      this.setState({ schoolDetails, contactDetails, schoolAddress });
    }
  }

  render() {
    const { school_name='', phone='', website='', vacancy_page='' } = this.state.schoolDetails;
    return (
      <Row>
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
        <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'margin': '10px 0px' }}/>
        <h2>School Information</h2>
        <Col sm={6}>
          <BasicContactDetails contact_details={this.state.contactDetails} />
        </Col>
        <Col sm={6}>
          <SchoolAddress school_address={this.state.schoolAddress} />
        </Col>
      </Row>
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
