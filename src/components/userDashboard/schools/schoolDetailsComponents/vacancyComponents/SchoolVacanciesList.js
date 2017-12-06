import React, { Component } from 'react';
import { Row, Col, Pagination, List, Avatar, Icon } from 'antd';
import { Link } from 'react-router'

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSchoolListDispatch } from "../../Schools_Actions";

//import VacancyCard from './VacancyCard';

const IconText = ({ type, text, processDate }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {processDate ? new Date(processDate).toDateString() : text}
  </span>
);

class SchoolVacanciesList extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state ={
      'current_school_id': 6,
      'vancanyList': [
        {
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
            "school_id": 266,
            "headline": "Remember why you became a teacher?",
            "status": "vacant",
            "start_date": "2018-08-01T00:00:00.000Z",
            "post_date": "2017-05-29T00:00:00.000Z",
            "closing_date": "2017-12-31T23:59:59.000Z",
            "closing_hours": "",
            "description": "This is your first step to a new career teaching in an International School.\nInternational Schools are a varied as the locations in which they are situated across the globe. You'll find super sized schools down to boutique sized schools and schools in mega cities as well as those in the wilderness. It all comes down to what you are looking for.\n\nCreate your profile here and start looking on the job board. Schools may also contact you. Keep up to date and see what opportunities exist for you.",
        },
        {
            "vacancy_id": 3015,
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
            "school_id": 266,
            "headline": "Remember why you became a teacher?",
            "status": "vacant",
            "start_date": "2018-08-01T00:00:00.000Z",
            "post_date": "2017-05-29T00:00:00.000Z",
            "closing_date": "2017-12-31T23:59:59.000Z",
            "closing_hours": "",
            "description": "This is your first step to a new career teaching in an International School.\nInternational Schools are a varied as the locations in which they are situated across the globe. You'll find super sized schools down to boutique sized schools and schools in mega cities as well as those in the wilderness. It all comes down to what you are looking for.\n\nCreate your profile here and start looking on the job board. Schools may also contact you. Keep up to date and see what opportunities exist for you.",
        }
    ]
    };
  }

  componentDidMount() {
    const { school_id } = this.props;
    this.setState({ 'current_school_id': school_id });
    // const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    // const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    //const response = this.props.getvancanyListDispatch(logoutPayloadHeader);
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps - vancanyList",nextProps);
    if( nextProps.vancanyList ) {
      const { vancanyList } = nextProps;
      this.setState({ vancanyList });
    }
  }

  onPageChange = (page, pageSize) => {
    console.log("Page:", page,pageSize);
  }

  getCurrentUrl = () => {
    const url = `/schoolprofile/vacany/${this.state.current_school_id}/3016`;
    return url;
  }

  render() {
    //Old list layout structure
    /*const listItems = this.state.vancanyList.map((vacancy) =>
            <VacancyCard key={vacancy.vacancy_id} vacancyDetails={vacancy}
                current_school_id={this.state.current_school_id} title={vacancy.headline} /> );*/
    return (
      <div className="">
        <h1 style={{'textAlign': 'left','color': '#1968a5' , padding: '10px' }}>
          School Vacancies
        </h1>
        <div className="vacancy-list-container" style={{ padding: '30px' }} >
          <Row gutter={16}>
            <Col offset={2} span={20}>
              <Row className="school-list-header" type="flex" justify="space-between">
                <Col><span><strong>Vacancies</strong></span></Col>
                <Col><span><strong>Results:{this.state.vancanyList.length}</strong></span></Col>
              </Row>
              <Row className="vacancy-list">
                <Col>
                  <List
                    itemLayout="vertical"
                    size="middle"
                    dataSource={this.state.vancanyList}
                    renderItem={item => (
                      <List.Item
                        key={item.vacancy_id}
                        actions={[<IconText type="contacts" text={item.school_level} />, <IconText type="calendar" text={item.start_date} processDate={true}/>, <IconText type="folder" text={item.closing_date} processDate={true}/>]}
                      >
                        <List.Item.Meta
                          title={<Link to={this.getCurrentUrl}>{item.headline}</Link>}
                          description={item.position}
                        />
                        {item.description}
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
              <Row type="flex" justify="space-around" style={{ marginTop:'10px' }}>
                <Col>
                  <Pagination onChange={this.onPageChange} defaultCurrent={1} total={100} />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps school dasboard",state);
  return { vancanyList: state.applicants.schools };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSchoolListDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(SchoolVacanciesList);
