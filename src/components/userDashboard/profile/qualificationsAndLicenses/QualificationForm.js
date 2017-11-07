import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form, 
  Input, Icon, DatePicker, Select } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';

const FormItem = Form.Item;
const Option = Select.Option;
moment.locale('en');

const qualificationTypePayload = [ 
    {
      'value': 'diploma',
      'text':'Diploma'
    },
    {
      'value':'graduate_certificate',
      'text':'Graduate Certificate'
    },
    {
      'value':'pgce',
      'text':'PGCE'
    },
    {
      'value':'pgde',
      'text':'PGDE'
    },
    {
      'value':'bachelor',
      'text':'Bachelor'
    },
    {
      'value':'master',
      'text':'Master'
    },
    {
      'value':'others',
      'text':'Others'
    },
]

const courseDurationPayload = [ 
    {
      'value': 10,
      'text':'10 years(s)'
    },
    {
      'value': 9,
      'text':'9 years(s)'
    },
    {
      'value': 8,
      'text':'8 years(s)'
    },
    {
      'value': 7,
      'text':'7 years(s)'
    },
    {
      'value': 6,
      'text':'6 years(s)'
    },
    {
      'value': 5,
      'text':'5 years(s)'
    },
    {
      'value': 4,
      'text':'4 years(s)'
    },
    {
      'value': 3,
      'text':'3 years(s)'
    },
    {
      'value': 2,
      'text':'2 years(s)'
    },
    {
      'value': 1,
      'text':'1 years(s)'
    }
]
const qualificationTypeOptions = qualificationTypePayload.map(d => <Option key={d.value} value={d.value}>{d.text}</Option>);
const courseDurationOptions = courseDurationPayload.map(d => <Option key={d.value} value={d.value}>{d.text}</Option>);

class QualificationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //currentQualification:{}
    }
  }
  
  /*componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps AllQualifications", nextProps)
    this.setState({qualificationsArray:nextProps.qualificationsArray})
  }*/

  render() {
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
    const { name='', place_of_study='', qualification_type='diploma', 
    country='', date_of_completion='1993-02-21', duration=2 } = this.props.currentQualification;
    const dateConfig = {
      rules: [{ type: 'object', required: true, message: 'Please select date!' }],
      initialValue: moment(  date_of_completion, 'YYYY-MM-DD')
    };

    return (
            <Form>
              <FormItem
                {...formItemLayout}
                label="Qualification Name"
              >
                {getFieldDecorator('name', { initialValue: name })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Place of Study"
              >
                {getFieldDecorator('place_of_study', { initialValue: place_of_study })(
                  <Input />
                )}
              </FormItem>
                            
              <FormItem
                {...formItemLayout}
                label="Qualification Type"
              >
              {getFieldDecorator('qualification_type', { initialValue: qualification_type })(
                <Select style={{ width: 120 }}>
                  {qualificationTypeOptions}
                </Select>
              )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Place of Study Country"
              >
                {getFieldDecorator('country', { initialValue: country })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Date of Qualification"
              >
                {getFieldDecorator('date-picker', dateConfig)(
                  <DatePicker />
                )}
              </FormItem>
              
              <FormItem
                {...formItemLayout}
                label="Qualification Type"
              >
              {getFieldDecorator('duration', { initialValue: duration })(
                <Select style={{ width: 120 }}>
                  {courseDurationOptions}
                </Select>
              )}
              </FormItem>
            </Form>
    );
  }
}

export default Form.create()(QualificationForm);
