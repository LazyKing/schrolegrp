import React, { Component } from 'react';
import { Button, Row, Col, Card, Progress,
          LocaleProvider, Form, Modal } from 'antd';

import enUS from 'antd/lib/locale-provider/en_US';
/*import components/modules*/
import PersonalDetails from './basicProfile/PersonalDetails';
import ContactDetails from './basicProfile/ContactDetails';
import Dependents from './basicProfile/Dependents';
import EmergencyContact from './basicProfile/EmergencyContact';
import CriminalConvictions from './basicProfile/CriminalConvictions';

/*Form components*/
import OtherPersonalDetailsForm from './otherForms/OtherPersonalDetailsForm';
import ImageUpload from './otherForms/ImageUpload';
import CvUpload from './otherForms/CvUpload'

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPersonalDetailsDispatch, updateProfileImageDispatch,
            updateOtherInfoDispatch } from "../../../actions";

const otherDetailsForm = {
  'edit_other_personal_details' : OtherPersonalDetailsForm
}


class BasicProfile extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      visible: false,
      confirmLoading: false,
      currentActiveForm: '',
      currentFormData: {},
      renderFormComponent: '',
      first_name: '',
      last_name: '',
      cv_url: '',
      link_to_video: '',
      profile_pic_url: '',
      personal_details: {},
      emergency_contact: {},
      criminal_convictions: {},
      contact_details: {},
      dependents:[]
    }
  }

  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    const response = this.props.getPersonalDetailsDispatch(logoutPayloadHeader);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps - basicprof",nextProps);
    const { first_name, last_name, personal_details, emergency_contact, profile_pic_url,
      criminal_convictions, contact_details, dependents,link_to_video, cv_url } = nextProps.applicantsProfilePayload.applicantsProfile;

    this.setState({ first_name, last_name , personal_details, emergency_contact, profile_pic_url,
      criminal_convictions, contact_details, dependents, link_to_video, cv_url});
  }

  showModal = (props) => {
    const { target } = props;
    console.log(target.id);
    const renderFormComponent = otherDetailsForm[target.id];

    this.setState({
      visible: true,
      currentActiveForm: target.id,
      renderFormComponent:renderFormComponent
    });
  }

  handleOk = () => {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }

    //console.log(payloadObj)
    if ( this.state.currentActiveForm === 'edit_other_personal_details' ) {
      var payloadObj = this._genericOtherInfoForm.getFieldsValue();

      this._genericOtherInfoForm.validateFields((err, values) => {
        //console.log(err);
        if(!err) {
          this.props.updateOtherInfoDispatch(logoutPayloadHeader, payloadObj );

          setTimeout(() => {
            this.setState({
              visible: false,
              confirmLoading: false,
            });
          }, 2000);
        }
      });
    }
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }


  renderForm() {
    const { first_name, last_name, link_to_video, cv_url } = this.state;
    const formData = { first_name, last_name, link_to_video, cv_url };

    if(this.state.renderFormComponent){
      return ( <this.state.renderFormComponent formData={formData}
        ref={(ref) => this._genericOtherInfoForm = ref} /> );
    }
    else
      return ''
  }

  render() {
    var profilePicUrl = global.devHost + this.state.profile_pic_url; //.replace("original", "medium");
    var cvUrl = global.devHost + this.state.cv_url;

    return (
      <div className="basic-profile-mainContainer">
          <Modal title="Edit Qualification"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
            okText={'Save'}
            cancelText={'cancel'}
            width={'70%'}
          >
            {this.renderForm()}
          </Modal>
          <div className="profile-basic-info-container">
            <Row gutter={16}>
              <Col xs={0} sm={10} md={8} lg={6}>
                <Card className="profile-pic-card" title={this.state.first_name + ' ' + this.state.last_name} style={{ height: 350 }}>
                  <img style={{ width: '100%', height:'100%' }} src= {profilePicUrl} />
                  <ImageUpload />
                </Card>
              </Col>
              <Col xs={0} sm={14} md={8} lg={10} >
                <div style={{ height: 230 }}>
                  <div className="basic-profile-header">
                    <h2> {this.state.first_name + ' ' + this.state.last_name} </h2>
                    <Button id="edit_other_personal_details" onClick={this.showModal}> Edit </Button>
                  </div>
                  <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid' }}/>
                  <div>
                    <Row>
                      <Col>
                        <Button> View Cv </Button>
                        <a href={cvUrl} download="resume">Download</a>
                      </Col>
                      <Col>
                        <a href={this.state.link_to_video} target="_blank">Link to tutorial Video</a>
                      </Col>
                      <Col>

                      </Col>
                    </Row>
                  </div>
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
                  <Dependents dependentsArray={this.state.dependents}/>
                </Col>
                <Col xs={0} sm={9} lg={8}>
                  <PersonalDetails personal_details={this.state.personal_details}/>
                  <EmergencyContact emergency_contact={this.state.emergency_contact}/>
                </Col>
                <Col xs={0} sm={6} lg={8} className="hidden-sm-down" >
                  <ContactDetails contact_details={this.state.contact_details} />
                  <CriminalConvictions criminal_convictions={this.state.criminal_convictions} />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={0} sm={9} lg={8}>
                </Col>
                <Col xs={0} sm={9} lg={8}>
                </Col>
                <Col xs={0} sm={6} lg={8} className="hidden-sm-down" >
                  <CvUpload />
                </Col>
              </Row>
            </div>
          </LocaleProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps",state);
  return { applicantsProfilePayload: state.applicants};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPersonalDetailsDispatch: getPersonalDetailsDispatch,
        updateProfileImageDispatch:updateProfileImageDispatch,
          updateOtherInfoDispatch:updateOtherInfoDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(BasicProfile));
