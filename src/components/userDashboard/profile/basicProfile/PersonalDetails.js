import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form, 
  Input, Icon, Select, DatePicker, Radio, LocaleProvider } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPersonalDetails, getPersonalDetailsDispatch, updatePersonalDetailsDispatch } from "../../../../actions";

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
      confirmDirty: false,
      applicantsProfile: {}
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
    this.setState({ applicantsProfile });
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
  
  render() {
    //console.log(this.props.applicantsProfile);
    //console.log(this.state);
    const { getFieldDecorator } = this.props.form;
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
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select date!' }],
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
        
        {getFieldDecorator('citizenship', { initialValue: 'yes' })( 
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
          {getFieldDecorator('date-picker', config)(
            <DatePicker />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="EU Passport"
        >
        {getFieldDecorator('euCitizenship', { initialValue: 'yes'  })( 
          <Select style={{ width: 120 }}>
            {euPassportOptions}
          </Select>
        )}
        </FormItem>
        
        <FormItem
          {...formItemLayout}
          label="Gender"
        >
        {getFieldDecorator('gender', { initialValue: 'female' })(
          <Select style={{ width: 120 }}>
            {genderOptions}
          </Select>
        )}  
        </FormItem>
        
        <FormItem
          {...formItemLayout}
          label="Marital Status"
        >
        {getFieldDecorator('maritialStatus', { initialValue: 'single' })(
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
              <Col><span>No</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Date of Birth</strong></span></Col>
              <Col><span>22/12/1974</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Gender</strong></span></Col>
              <Col><span>Female</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Marital status</strong></span></Col>
              <Col><span>Single</span></Col>
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
  return bindActionCreators({ getPersonalDetails: getPersonalDetails, getPersonalDetailsDispatch: getPersonalDetailsDispatch, 
      updatePersonalDetailsDispatch: updatePersonalDetailsDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(PersonalDetails));