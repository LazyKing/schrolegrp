import React, { Component } from 'react';
import { Form, Input, Icon } from 'antd';

const FormItem = Form.Item;

class OtherPersonalDetailsForm extends Component {

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

    const { first_name='', last_name='', link_to_video='' } = this.props.formData;

    return (
        <Form>
          <FormItem
            {...formItemLayout}
            label="First Name"
          >
            {getFieldDecorator('first_name', {
                rules: [{required: true, message: 'This field is required!'}], 
                initialValue: first_name })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Last Name"
          >
            {getFieldDecorator('last_name', {
                rules: [{required: true, message: 'This field is required!'}], 
                initialValue: last_name } )(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Link to video"
          >
            {getFieldDecorator('link_to_video', { initialValue: link_to_video })(
              <Input />
            )}
          </FormItem>
        </Form>
    );
  }
}

export default Form.create()(OtherPersonalDetailsForm);
