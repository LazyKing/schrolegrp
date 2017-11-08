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
      visible: false,
      confirmLoading: false,
      showOtherCitizenship: false,
      personalDetails: {
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
  
  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps - personal details",nextProps);
    this.setState({personalDetails:nextProps.personal_details})
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    //console.log(this.props.form.getFieldsValue());
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email };
    this.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        this.props.updatePersonalDetailsDispatch( logoutPayloadHeader, this.props.form.getFieldsValue());
        this.setState({
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
  
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const dateConfig = {
      rules: [{ type: 'object', required: true, message: 'Please select date!' }],
      initialValue: moment( this.state.personalDetails.dob, 'YYYY-MM-DD')
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
            width={'70%'}
          >
            <Form>
              <FormItem
                {...formItemLayout}
                label="Country of Birth"
              >
                {getFieldDecorator('country_of_birth', { initialValue: this.state.personalDetails.country_of_birth })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Country of Citizenship"
              >
                {getFieldDecorator('country_of_citizenship', { initialValue: this.state.personalDetails.country_of_citizenship })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Other Citizenship"
              >
              
              {getFieldDecorator('other_citizenship', { initialValue: (this.state.personalDetails.other_citizenship) ? 'yes' : 'no' })( 
                <RadioGroup>
                  <Radio value={'yes'}>Yes</Radio>
                  <Radio value={'no'}>No</Radio>
                </RadioGroup>
              )}
              </FormItem>
              <FormItem
              style={{'display': this.state.showOtherCitizenship ? 'block' : 'none'}}
                {...formItemLayout}
                label="Other citizenship's"
              >
                {getFieldDecorator('other_citizenship_country', { initialValue: this.state.personalDetails.other_citizenship_country })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Date of Birth"
              >
                {getFieldDecorator('dob', dateConfig)(
                  <DatePicker />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="EU Passport"
              >
              {getFieldDecorator('eu_passport', { initialValue: (this.state.personalDetails.eu_passport) ? 'yes' : 'no'  })( 
                <Select style={{ width: 120 }}>
                  {euPassportOptions}
                </Select>
              )}
              </FormItem>
              
              <FormItem
                {...formItemLayout}
                label="Gender"
              >
              {getFieldDecorator('gender', { initialValue: this.state.personalDetails.gender })(
                <Select style={{ width: 120 }}>
                  {genderOptions}
                </Select>
              )}  
              </FormItem>
              
              <FormItem
                {...formItemLayout}
                label="Marital Status"
              >
              {getFieldDecorator('marital_status', { initialValue: this.state.personalDetails.marital_status })(
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
              <Col><span>{this.state.personalDetails.country_of_birth}</span></Col>
            </Row>
             <Row type="flex" justify="space-between">
              <Col><span><strong>Country of Birth</strong></span></Col>
              <Col><span>{this.state.personalDetails.country_of_citizenship}</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>EU Passport</strong></span></Col>
              <Col><span>{ this.state.personalDetails.eu_passport ? 'Yes' : 'No'}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Date of Birth</strong></span></Col>
              <Col><span>{this.state.personalDetails.dob}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Gender</strong></span></Col>
              <Col><span>{this.state.personalDetails.gender}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Marital status</strong></span></Col>
              <Col><span>{this.state.personalDetails.marital_status}</span></Col>
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