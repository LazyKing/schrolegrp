import React, { Component } from 'react';
import { Button, Row, Col, Card,
          Modal, Form, Input, Select, DatePicker } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;

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
const genderOptions = genderOptionsPayload.map(d => <Option key={d.value} value={d.value}>{d.text}</Option>);

class DependentForm extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = { }
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };
    const dateConfig = {
      rules: [{ type: 'object', required: true, message: 'Please select date!' }],
      initialValue: moment( '1993-02-21', 'YYYY-MM-DD')
    };

    return (
          <Form>
            <FormItem
              {...formItemLayout}
              label="Please write dependent's full name"
            >
              {getFieldDecorator('name', {
                rules: [{required: true, message: 'This field is required!'}], 
                initialValue: '' }) (
                <Input />
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Dependent's gender"
            >
            {getFieldDecorator('gender', { initialValue: 'male' })(
              <Select style={{ width: 120 }}>
                {genderOptions}
              </Select>
            )}  
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Please select dependent's date of birth"
            >
              {getFieldDecorator('dob', dateConfig)(
                <DatePicker />
              )}
            </FormItem>
          </Form>
    );
  }
}

export default Form.create()(DependentForm);
