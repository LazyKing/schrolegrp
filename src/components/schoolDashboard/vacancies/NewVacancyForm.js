import React, { Component } from 'react';
import { Button, Form, Input, DatePicker, Select } from 'antd';
import _ from 'lodash';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createNewVacancyDispatch, getVacancyDetailsDispatch } from "../School_Actions";

/*import data*/
import qualificationLevel from '../../../assets/data/qualification_level.json'
import typeOfCurriculum from '../../../assets/data/type_of_curriculum.json'

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const coverLetterRequired = [
  {'text':'Yes', 'value': 'yes' },
  {'text':'No', 'value': 'no' }
]
const qualificationLevelOptions = qualificationLevel.map(d => <Option key={d.value} value={d.value}>{d.text}</Option>);
const coverLetterRequiredOptions = coverLetterRequired.map(d => <Option key={d.text} value={d.value}>{d.text}</Option>);
const typeOfCurriculumOptions = typeOfCurriculum.map(d => <Option key={d.value} value={d.value}>{d.text}</Option>);

class NewVacancyForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'currentVacancyDetails': {}
    }
  }

  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    // if( mode = edit )
    //   this.props.getVacancyDetailsDispatch(logoutPayloadHeader);
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps - Dashboard",nextProps);
    //const { step_no, new_registration, id, details_updated } = nextProps.currentVacancyDetails;
    //this.setState({ 'schoolProfile': nextProps.schoolProfile, 'schoold_id':id, step_no, new_registration, details_updated });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
      },
    };
    //const { country='in', registration_no='' } = this.props.currentLicence;
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    return (
        <Form>

          <FormItem
            {...formItemLayout}
            label="Qualification Level"
          >
            {getFieldDecorator('qualification_level', { initialValue: 'bachelor' })(
              <Select style={{ width: 220 }}>
                {qualificationLevelOptions}
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Cover Letter required"
          >
            {getFieldDecorator('cover_letter_required', { initialValue: 'yes' })(
              <Select style={{ width: 220 }}>
                {coverLetterRequiredOptions}
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Curriculum"
          >
            {getFieldDecorator('curriculums', { initialValue: 'montessori' })(
              <Select style={{ width: 220 }}>
                {typeOfCurriculumOptions}
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Role"
          >
            {getFieldDecorator('position', {
              rules: [{ required: true, message: 'Please enter the role!' }]
              })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="School level"
          >
            {getFieldDecorator('school_level', {
              rules: [{ required: true, message: 'Please enter the school level!' }]
              })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Starting"
            >
            {getFieldDecorator('start_date', config)(
              <DatePicker />
            )}
          </FormItem>

        <FormItem
            {...formItemLayout}
            label="Apply before"
          >
          {getFieldDecorator('closing_date', config)(
            <DatePicker />
          )}
        </FormItem>

          <FormItem
            {...formItemLayout}
            label="Description"
          >
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Please enter the description!' }]
              })(
              <TextArea rows={4} />
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Create Vacancy</Button>
          </FormItem>

        </Form>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps school dasboard",state);
  return { currentVacancyDetails: state.schools.currentVacancyDetails};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewVacancyDispatch, getVacancyDetailsDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create({
  // onFieldsChange(props, changedFields) {
  //   //console.log(props, changedFields);
  // },
  // mapPropsToFields(props) {
  //   //console.log(props);
  //   var updatedState = {};
  //   _.forEach( props.currentLicence, function(value, key) {
  //       updatedState[key] = Form.createFormField({ 'value': value });
  //   });
  //   return updatedState;
  // }
})(NewVacancyForm));
