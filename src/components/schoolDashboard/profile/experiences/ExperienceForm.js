import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form,
  Input, Icon, DatePicker, Select } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';

/*import data*/
import countryCodes from '../../../../assets/data/countryCodes.json'

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
const countryOptions = countryCodes.map(d => <Option key={d.code} value={d.code}>{d.name}</Option>);

class ExperienceForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    //this.updateFormValues(this.state.applicantsProfile);
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const { name_of_school='', position='', school_level='diploma',
    country='', from='1993-02-21', to='1993-02-21', duration=3 } = this.props.currentExperience;

    const fromdateConfig = {
      rules: [{ type: 'object' }],
      initialValue: moment( from, 'YYYY-MM-DD')
    };
    const todateConfig = {
      rules: [{ type: 'object' }],
      initialValue: moment(  to, 'YYYY-MM-DD')
    };

    return (
            <Form>
              <FormItem
                {...formItemLayout}
                label="Name of school at which you taught"
              >
                {getFieldDecorator('name_of_school', { initialValue: name_of_school })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Position"
              >
                {getFieldDecorator('position', { initialValue: position })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="School Level"
              >
              {getFieldDecorator('school_level', { initialValue: school_level })(
                <Select style={{ width: 120 }}>
                  {qualificationTypeOptions}
                </Select>
              )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Country"
              >
                {getFieldDecorator('country', { initialValue: country })(
                  <Select style={{ width: 220 }}>
                    {countryOptions}
                  </Select>
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="from"
              >
                {getFieldDecorator('from', fromdateConfig)(
                  <DatePicker />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="to"
              >
                {getFieldDecorator('to', todateConfig)(
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

export default Form.create()(ExperienceForm);
