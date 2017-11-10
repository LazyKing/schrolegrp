import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form, 
  Input, Icon, DatePicker, Select } from 'antd';

const FormItem = Form.Item;

class LicenceForm extends Component {

  constructor(props) {
    super(props);
    this.state = { }
  }

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

    const { country='', registration_no='' } = this.props.currentLicence;

    return (
        <Form>
          <FormItem
            {...formItemLayout}
            label="Country of registration/licence"
          >
            {getFieldDecorator('country', { initialValue: country })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Registration Number"
          >
            {getFieldDecorator('registration_no', { initialValue: registration_no })(
              <Input />
            )}
          </FormItem>
        </Form>
    );
  }
}

export default Form.create()(LicenceForm);
