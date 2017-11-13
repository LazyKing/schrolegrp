import React, { Component } from 'react';
import { Form, Input, Icon } from 'antd';

const FormItem = Form.Item;

class ImageUploadForm extends Component {

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
            label="Upload your image"
          >
            {getFieldDecorator('profile_pic_url', {
                rules: [{required: true, message: 'This field is required!'}] })(
              <input id="inputFileToLoad" type="file" />
            )}
          </FormItem>
        </Form>
    );
  }
}

export default Form.create()(ImageUploadForm);
