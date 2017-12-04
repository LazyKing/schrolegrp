import React, { Component } from 'react';
import { Button, Row, Col, Icon, Card } from 'antd';
import { browserHistory } from 'react-router';

class VacancyCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'current_school_id':'',
      'start_date': '',
      'closing_date': '',
      'title':'',
      'position':'',
      'school_level':'',
      'description':''
    };
  }

  componentDidMount() {
    //console.log(this.props);
    if ( this.props.vacancyDetails ) {
      const { vacancyDetails, current_school_id } = this.props;
      const { start_date, closing_date, title, position,
        school_level, description } = vacancyDetails;
        this.setState({ start_date, closing_date, title, position,
          school_level, description, current_school_id });
    }
  }

  viewVacancyDetails = () => {
    browserHistory.push({
      pathname: '/schoolprofile/vacany/' + this.state.current_school_id
    });
  }

  render() {
    const { start_date, closing_date, title, position,
      school_level, description, current_school_id } = this.state;
    const startDateObj = new Date(start_date);
    const closeDateObj = new Date(closing_date);
    const startDate = startDateObj.toDateString();
    const closeDate = closeDateObj.toDateString();
    return (
      <Card className="vacancy-card" onClick={this.viewVacancyDetails}>
      <Row className="" >
        <Col className="school-card-container">
          <Row type="flex" justify="space-between" className="school-card-name-container col-sm-12">
            <Col>
              <h3 className="vacancyTitle">{this.props.title}</h3>
              <h4 className="vacancyPosition">{position}</h4>

            </Col>
            <Col>
              <p>
                <Icon type="contacts" /><span>{school_level}</span>
              </p>
              <p>
                <Icon type="calendar" /><span>{startDate}</span>
              </p>
              <p>
                <Icon type="folder" /><span>{closeDate}</span>
              </p>
            </Col>
            <Col sm={12}>
              <p className="vacancy-description" title={description}>{description}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      </Card>
    );
  }
}
/*
<Row className="school-card-actions-container">
  <Button>Update Questions</Button>
</Row>*/
export default VacancyCard;
