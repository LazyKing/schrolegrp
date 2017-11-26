import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form,
  Input, Icon, DatePicker, Select, TreeSelect } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';

/*import data*/
import countryCodes from '../../../../assets/data/countryCodes.json'
import relationshipToCandidate from '../../../../assets/data/relationshipToCandidate.json'

const FormItem = Form.Item;
const Option = Select.Option;
moment.locale('en');

var relationshipToCandidateOptions = [];
_.forEach( relationshipToCandidate, function(value, key) {
  var currentObj = {};
  var currentArr = [];
  currentObj['label'] = key;
  currentObj['disabled'] = true;
  _.forEach( value, function(value, key) {
    currentArr.push(
      {
        'label': value.text,
        'value': value.value
      }
    );
  });
  currentObj['children'] = currentArr;
  relationshipToCandidateOptions.push(currentObj);
});
const countryOptions = countryCodes.map(d => <Option key={d.code} value={d.code}>{d.name}</Option>);

class AcademicReferencesForm extends Component {

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
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const { name = null, relation = null, first_name = null, last_name = null, email = null,
			phone = null, address_lin1 = null, address_line2 = null, suburb = null, city = null, state = null,
			country = null, school_name = null, school_city = null, school_state = null, school_country = null,
			worked_from = null, worked_to = null, reference_type = "academic" } = this.props.currentAcademicReference;

    const fromdateConfig = {
      rules: [{ type: 'object' }],
      initialValue: new moment( worked_from, 'YYYY-MM-DD')
    };
    const todateConfig = {
      rules: [{ type: 'object' }],
      initialValue: new moment(  worked_to, 'YYYY-MM-DD')
    };

    return (
            <Form>

            <FormItem
              {...formItemLayout}
              label="Relationship to candidate"
            >
            {getFieldDecorator('relation', { initialValue: relation })(
                <TreeSelect
                  style={{ width: 350 }}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={relationshipToCandidateOptions}
                  placeholder="Please select"
                  treeDefaultExpandAll
                />
            )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="First Name"
              hasFeedback
            >
              {getFieldDecorator('first_name', {
                rules: [{
                  required: true, message: 'Please input your First name!',
                }],
              })(
                <Input />
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Last Name"
              hasFeedback
            >
              {getFieldDecorator('last_name', {
                rules: [{
                  required: true, message: 'Please input your Last name!',
                }],
              })(
                <Input />
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="E-mail"
              hasFeedback
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input />
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Phone Number"
            >
              {getFieldDecorator('phone', { initialValue: phone })(
                <Input placeholder="eg: +6112345678" />
              )}
            </FormItem>

              <FormItem
                {...formItemLayout}
                label="Address"
              >
                {getFieldDecorator('address_lin1', { initialValue: address_lin1 })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label=" "
              >
                {getFieldDecorator('address_line2', { initialValue: address_line2 })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Suburb"
              >
                {getFieldDecorator('suburb', { initialValue: suburb })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="City"
              >
                {getFieldDecorator('city', { initialValue: city })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="State"
              >
                {getFieldDecorator('state', { initialValue: state })(
                  <Input />
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
                label="Name of school at which you taught"
              >
                {getFieldDecorator('school_name', { initialValue: school_name })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="City"
              >
                {getFieldDecorator('school_city', { initialValue: school_city })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="State"
              >
                {getFieldDecorator('school_state', { initialValue: school_state })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Country"
              >
                {getFieldDecorator('school_country', { initialValue: school_country })(
                  <Select style={{ width: 220 }}>
                    {countryOptions}
                  </Select>
                )}
              </FormItem>


              <FormItem
                {...formItemLayout}
                label="from"
              >
                {getFieldDecorator('worked_from', fromdateConfig)(
                  <DatePicker />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="to"
              >
                {getFieldDecorator('worked_to', todateConfig)(
                  <DatePicker />
                )}
              </FormItem>
            </Form>
    );
  }
}

export default Form.create()(AcademicReferencesForm);
