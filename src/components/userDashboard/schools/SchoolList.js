import React, { Component } from 'react';
import { Row, Col, Pagination, List, Icon } from 'antd';
import {Link} from 'react-router';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSchoolListDispatch } from "./Schools_Actions";

//import SchoolCard from './SchoolCard';

const IconText = ({ type, text, schoolId, anchorFlag, anchorRef }) => (
  <span>
    <Icon type={type} style={{ marginRight: 5 }} />
    { anchorFlag ? <a href={anchorRef}>{text}</a>  : <Link to={'/userprofile/schools/' + schoolId}>{text}</Link> }
  </span>
);

class SchoolList extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state ={
      'schoolList': []
    };
  }

  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    const response = this.props.getSchoolListDispatch(logoutPayloadHeader);
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps - schoollist",nextProps);
    if( nextProps.schoolList ) {
      const { schoolList } = nextProps;
      this.setState({ schoolList });
    }
  }

  onPageChange = (page, pageSize) => {
    console.log("Page:", page,pageSize);
  }

  render() {
    /*Old list*/
    /*const listItems = this.state.schoolList.map((school) =>
            <SchoolCard key={school.id} schoolDetails={school} title={school.school_name} location={school.location} /> );*/
    return (
      <div className="">
        <h1 style={{'textAlign': 'left','color': '#1968a5' , padding: '10px' }}>
          Registered Schools
        </h1>
        <div className="" style={{ background: '#ECECEC', padding: '30px' }} >
          <Row gutter={16}>
            <Col offset={2} span={20}>
              <Row className="school-list-header" type="flex" justify="space-between">
                <Col><span><strong>Schools</strong></span></Col>
                <Col><span><strong>Results:{this.state.schoolList.length}</strong></span></Col>
              </Row>
              <List
                className="school-list"
                itemLayout="horizontal"
                dataSource={this.state.schoolList}
                renderItem={item => (
                  <List.Item actions={[ <IconText type="file" text="School Profile" schoolId={item.id} />, <IconText type="global" text="School Website" anchorFlag={true} anchorRef={item.website}/>]}>
                    <List.Item.Meta
                      title={<a href="javascript.void(0)">{item.school_name}</a>}
                      description={item.country}
                    />
                    <div></div>
                  </List.Item>
                )}
              />
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
  return { schoolList: state.applicants.schools };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSchoolListDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(SchoolList);
