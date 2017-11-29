import React, { Component } from 'react';
import { Row, Col, Form, Input, InputNumber, Select } from 'antd';


/*import data*/
import months from "../../../assets/data/months.json";
import languages from "../../../assets/data/languages.json";
import extra_curricular_programs from "../../../assets/data/extra_curricular_programs.json";
import type_of_curriculum from "../../../assets/data/type_of_curriculum.json";
import sports from "../../../assets/data/sports.json";
import examinationAndTests from "../../../assets/data/examinationAndTests.json";
import school_type from "../../../assets/data/school_type.json";

/*import components*/
const FormItem = Form.Item;
const Option = Select.Option;

const monthOptions = months.map( month => <Option key={month.value} value={month.value}>{month.text}</Option>);
const languagesOptions = languages.map( language => <Option key={language.value} value={language.value}>{language.text}</Option>);
const extraCurricularProgramsOptions = extra_curricular_programs.map( extra_curricular_program => <Option key={extra_curricular_program.value} value={extra_curricular_program.value}>{extra_curricular_program.text}</Option>);
const typeOfCurriculumOptions = type_of_curriculum.map( type_of_curriculum => <Option key={type_of_curriculum.value} value={type_of_curriculum.value}>{type_of_curriculum.text}</Option>);
const sportsOptions = sports.map( sport => <Option key={sport.value} value={sport.value}>{sport.text}</Option>);
const examinationAndTestsOptions = examinationAndTests.map( examinationAndTest => <Option key={examinationAndTest.value} value={examinationAndTest.value}>{examinationAndTest.text}</Option>);
const schoolTypeOptions = school_type.map( schoolType => <Option key={schoolType.value} value={schoolType.value}>{schoolType.text}</Option>);


class SchoolRegisterPage_5 extends Component {

		constructor(props) {
    	super(props);

	    this.state = {
	      confirmDirty: ''
	    };
  	}

		componentWillReceiveProps(nextProps) {
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
	        sm: { span: 12 },
	      },
	    };

	    return (
	        <Row type="flex" className="candidate-signup-pageContainer">
	        	<Col sm={24}>
						<h1>Educational Information</h1>
	        	<Form >
              <h3>School Year</h3>
              <FormItem
                {...formItemLayout}
                label="From month"
              >
              {getFieldDecorator('from_month', { initialValue: 'january' })(
                <Select
                style={{ width: '100%' }}>
                  {monthOptions}
                </Select>
              )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="To month"
              >
              {getFieldDecorator('to_month', { initialValue: 'december' })(
                <Select
                style={{ width: '100%' }}>
                  {monthOptions}
                </Select>
              )}
              </FormItem>

              <h3>Average Class Size</h3>
              <FormItem
                {...formItemLayout}
                label="Elementary"

              >
                {getFieldDecorator('elementary_class_size', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Secondary"

              >
                {getFieldDecorator('secondary_class_size', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>

							<FormItem
								{...formItemLayout}
								label="School Type"
							>
							{getFieldDecorator('school_type', { initialValue: 'day' })(
								<Select
								style={{ width: '100%' }}>
									{schoolTypeOptions}
								</Select>
							)}
							</FormItem>

              <FormItem
                {...formItemLayout}
                label="Type Of Curriculum"
              >
              {getFieldDecorator('type_of_curriculum', { initialValue: 'common_ground_collaborative' })(
                <Select
                style={{ width: '100%' }}>
                  {typeOfCurriculumOptions}
                </Select>
              )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="(please specify) Other:"
              >
                {getFieldDecorator('other_curriculum', {
                })(
                  <Input />
                )}
              </FormItem>

              <h3>Languages</h3>

              <FormItem
                {...formItemLayout}
                label="Language(s) Taught"
              >
              {getFieldDecorator('languages_taught', { initialValue: 'english' })(
                <Select
                mode="multiple"
                style={{ width: '100%' }}>
                  {languagesOptions}
                </Select>
              )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Other Languages"
              >
                {getFieldDecorator('other_languages', {
                })(
                  <Input />
                )}
              </FormItem>


              <FormItem
                {...formItemLayout}
                label="Extra-curricular Programs"
              >
              {getFieldDecorator('extra_curricular_programs', { initialValue: 'dance' })(
                <Select
                mode="multiple"
                style={{ width: '100%' }}>
                  {extraCurricularProgramsOptions}
                </Select>
              )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Sports"
              >
              {getFieldDecorator('sports', { initialValue: 'football' })(
                <Select
                mode="multiple"
                style={{ width: '100%' }}>
                  {sportsOptions}
                </Select>
              )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Examination and Tests"
              >
              {getFieldDecorator('examination_and_tests', { initialValue: 'SAT' })(
                <Select
                mode="multiple"
                style={{ width: '100%' }}>
                  {examinationAndTestsOptions}
                </Select>
              )}
              </FormItem>

              <h3>Graduating class</h3>
              <FormItem
                {...formItemLayout}
                label="Percentage of graduates who gain admission to college"

              >
                {getFieldDecorator('percentage_of_admitted_grads', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>

	      		</Form>
	      		</Col>
	        </Row>
	    );
  	}
}

export default Form.create()(SchoolRegisterPage_5);
