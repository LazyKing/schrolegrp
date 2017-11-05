import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form, 
  Input, Icon, Select, DatePicker, Radio } from 'antd';
import moment from 'moment';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPersonalDetailsDispatch, updatePersonalDetailsDispatch } from "../../../../actions";

import enUS from 'antd/lib/locale-provider/en_US';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const euPassportOptionsPayload = [ 
    {
      'value': 'no',
      'text':'NO'
    },
    {
      'value':'yes',
      'text':'Yes'
    }
]
const genderOptionsPayload = [ 
    {
      'value': 'male',
      'text':'Male'
    },
    {
      'value':'female',
      'text':'Female'
    }
]
const maritialOptionsPayload = [ 
    {
      'value': 'single',
      'text':'Single'
    },
    {
      'value':'married',
      'text':'Married'
    },
    {
      'value':'in_relationship',
      'text':'In Relationship'
    }
]
const euPassportOptions = euPassportOptionsPayload.map(d => <Option key={d.value} value={d.value}>{d.text}</Option>);
const genderOptions = genderOptionsPayload.map(d => <Option key={d.value} value={d.value}>{d.text}</Option>);
const maritialOptions = maritialOptionsPayload.map(d => <Option key={d.value} value={d.value}>{d.text}</Option>);

class PersonalDetails extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      applicantsProfile: {
        'country_of_birth':"Pakistan",
        'country_of_citizenship':"NewZealand",
        'dob':"1997-12-12",
        'eu_passport':true,
        'gender':"male",
        'marital_status':"single",
        'other_citizenship':'yes',
        'other_citizenship_country':"Uruguay"
      }
    }
  }

  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    const response = this.props.getPersonalDetailsDispatch(logoutPayloadHeader);
  }
  
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps",nextProps);
    const { applicantsProfile } = nextProps
    const personalDetails = applicantsProfile.personal_details;
    this.setState({ personalDetails });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    console.log(this.props.form.getFieldsValue());
    this.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        //update new data here
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      }
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  updateFormValues = ( applicantsProfile ) => {
    //console.log(applicantsProfile);
    /*this.props.form.setFieldsValue({
      'citizenship': applicantsProfile.other_citizenship
    })*/
  }
  
  render() {
    //console.log(this.props.applicantsProfile);
    //console.log(this.state);
    const { getFieldDecorator } = this.props.form;
    //this.updateFormValues(this.state.applicantsProfile);

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const dateConfig = {
      rules: [{ type: 'object', required: true, message: 'Please select date!' }],
      initialValue: moment( this.state.applicantsProfile.dob, 'YYYY-MM-DD')
    };

    return (
        <Card title="Personal Details" extra={<div><Button onClick={this.showModal}>Edit</Button></div>}>
          <Modal title="Personal Details"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
            okText={'Save'}
            cancelText={'cancel'}
          >
            <Form>
              <FormItem
                {...formItemLayout}
                label="Other Citizenship"
              >
              
              {getFieldDecorator('citizenship', { initialValue: (this.state.applicantsProfile.other_citizenship) ? 'yes' : 'no' })( 
                <RadioGroup>
                  <Radio value={'yes'}>Yes</Radio>
                  <Radio value={'no'}>No</Radio>
                </RadioGroup>
              )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Date of Birth"
              >
                {getFieldDecorator('date-picker', dateConfig)(
                  <DatePicker />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="EU Passport"
              >
              {getFieldDecorator('euCitizenship', { initialValue: (this.state.applicantsProfile.eu_passport) ? 'yes' : 'no'  })( 
                <Select style={{ width: 120 }}>
                  {euPassportOptions}
                </Select>
              )}
              </FormItem>
              
              <FormItem
                {...formItemLayout}
                label="Gender"
              >
              {getFieldDecorator('gender', { initialValue: this.state.applicantsProfile.gender })(
                <Select style={{ width: 120 }}>
                  {genderOptions}
                </Select>
              )}  
              </FormItem>
              
              <FormItem
                {...formItemLayout}
                label="Marital Status"
              >
              {getFieldDecorator('maritialStatus', { initialValue: this.state.applicantsProfile.marital_status })(
                <Select style={{ width: 120 }}>
                  {maritialOptions}
                </Select>
              )}
              </FormItem>
            </Form>
          </Modal>
          <div>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Country of Citizenship</strong></span></Col>
              <Col><span>United States of America</span></Col>
            </Row>
             <Row type="flex" justify="space-between">
              <Col><span><strong>Country of Birth</strong></span></Col>
              <Col><span>United States of America</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>EU Passport</strong></span></Col>
              <Col><span>{ this.state.applicantsProfile.eu_passport ? 'Yes' : 'No'}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Date of Birth</strong></span></Col>
              <Col><span>{this.state.applicantsProfile.dob}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Gender</strong></span></Col>
              <Col><span>{this.state.applicantsProfile.gender}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Marital status</strong></span></Col>
              <Col><span>{this.state.applicantsProfile.marital_status}</span></Col>
            </Row>
          </div>
        </Card>
    );
  }
}
function mapStateToProps(state) {
  //console.log("mapStateToProps",state);
  return { applicantsProfile: state.applicants};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPersonalDetailsDispatch: getPersonalDetailsDispatch, 
      updatePersonalDetailsDispatch: updatePersonalDetailsDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(PersonalDetails));