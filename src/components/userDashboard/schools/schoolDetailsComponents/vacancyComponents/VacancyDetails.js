import React, { Component } from 'react';
import { Button, Row, Col, Icon, Card } from 'antd';
import { Well } from 'react-bootstrap';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCurrentSchoolDetailsDispatch } from "../../Schools_Actions";


class VacancyDetails extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      'schoolDetails': {},
      'contactDetails': {},
      'schoolAddress': {},
      'current_vancany_details': {
            "vacancy_id": 3016,
            "school_level": "Whole School",
            "qualification_level_id": 2,
            "qualification_level": "Bachelor",
            "curriculums": [
                {
                    "curriculum_id": 1,
                    "curriculum": "International"
                }
            ],
            "position": "International School Teacher",
            "cover_letter_required": false,
            "school_id": 266,
            "headline": "Remember why you became a teacher?",
            "status": "vacant",
            "start_date": "2018-08-01T00:00:00.000Z",
            "post_date": "2017-05-29T00:00:00.000Z",
            "closing_date": "2017-12-31T23:59:59.000Z",
            "closing_hours": "",
            "description": "This is your first step to a new career teaching in an International School.\nInternational Schools are a varied as the locations in which they are situated across the globe. You'll find super sized schools down to boutique sized schools and schools in mega cities as well as those in the wilderness. It all comes down to what you are looking for.\n\nCreate your profile here and start looking on the job board. Schools may also contact you. Keep up to date and see what opportunities exist for you.",
            "prerequisites": [
              {
                  "prerequisite_id": 304,
                  "prerequisite": "Must be a registered teacher in your home country"
              }
            ]
          }
    };
  }

  componentDidMount() {
    //console.log(this.props);
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    if( this.props.params && this.props.params.schoolid) {
        this.props.getCurrentSchoolDetailsDispatch(logoutPayloadHeader, this.props.params.schoolid).then(() =>
        {
          //make getVacancyDetailsCall
          //this.props.params.vacanyid
        });
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
    const { headline, position, start_date, closing_date,
    description, qualification_level, school_level, cover_letter_required, prerequisites } = this.state.current_vancany_details;
    const startDateObj = new Date(start_date);
    const closeDateObj = new Date(closing_date);
    const startDate = startDateObj.toDateString();
    const closeDate = closeDateObj.toDateString();
    const prerequisiteListItems = prerequisites.map((prerequisite) =>
            <li key={prerequisite.prerequisite_id}> {prerequisite.prerequisite}</li> );
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
      </Row>
      <Row type="flex" justify="space-between">
        <Col><h2>{headline}</h2></Col>
        <Col><Button type="primary">Apply Now</Button></Col>
      </Row>
      <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'margin': '10px 0px' }}/>
      <Well>
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8}>
            <Icon type="contacts" />
            <span><strong>Role: {position}</strong></span>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Icon type="calendar" />
            <span><strong>Starting: {startDate}</strong></span>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Icon type="calendar" />
            <span><strong>Apply before: {closeDate}</strong></span>
          </Col>
        </Row>
        <Row gutter={16} style={{ 'marginTop': '15px'}}>
          <Col xs={24} sm={12} lg={6}>
            <Icon type="calendar" />
            <span><strong>Curriculum: {closeDate}</strong></span>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Icon type="calendar" />
            <span><strong>Qualification Level: {qualification_level}</strong></span>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Icon type="calendar" />
            <span><strong>Cover letter required: {cover_letter_required ? 'Yes' : 'No'}</strong></span>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Icon type="calendar" />
            <span><strong>School level: {school_level}</strong></span>
          </Col>
        </Row>
      </Well>
      <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'margin': '10px 0px' }}/>
      <Card>
        <Row gutter={16} style={{ 'marginTop': '15px'}}>
          <Col xs={24} sm={12}>
            <h3>Description</h3>
            <p>{description}</p>
          </Col>
          <Col xs={24} sm={12}>
            <h3>Recruitment Prerequisites</h3>
            <div>
              {prerequisiteListItems}
            </div>
          </Col>
        </Row>
      </Card>
      <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'margin': '10px 0px' }}/>
      <Row type="flex" justify="center">
        <Col>
          <Button type="primary" style={{'width':250, 'height':70, 'fontSize': 'x-large' }}> Apply here </Button>
        </Col>
      </Row>
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

export default connect( mapStateToProps, mapDispatchToProps)(VacancyDetails);
