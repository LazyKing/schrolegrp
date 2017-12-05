import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form,
  Input, Icon, DatePicker, Select } from 'antd';
import _ from 'lodash';
/*import data*/
import countryCodes from '../../../../assets/data/countryCodes.json'
const FormItem = Form.Item;
const Option = Select.Option;
const countryOptions = countryCodes.map(d => <Option key={d.code} value={d.code}>{d.name}</Option>);

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

    const { country='in', registration_no='' } = this.props.currentLicence;

    return (
        <Form>
          <FormItem
            {...formItemLayout}
            label="Country of registration/licence"
          >
            {getFieldDecorator('country', { initialValue: country })(
              <Select style={{ width: 220 }}>
                {countryOptions}
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Registration Number"
          >
            {getFieldDecorator('registration_no', {
              rules: [{ required: true, message: 'Please enter the Licence registration number!' }],
              initialValue: registration_no
              })(
              <Input />
            )}
          </FormItem>
        </Form>
    );
  }
}

export default Form.create({
  onFieldsChange(props, changedFields) {
    //console.log(props, changedFields);
  },
  mapPropsToFields(props) {
    //console.log(props);
    var updatedState = {};
    _.forEach( props.currentLicence, function(value, key) {
        updatedState[key] = Form.createFormField({ 'value': value });
    });
    return updatedState;
  }
})(LicenceForm);
