import React, { Component } from 'react';
import { Row, Col, Form, Input, InputNumber } from 'antd';

/*import components*/
const FormItem = Form.Item;

class SchoolRegisterPage_3 extends Component {

		constructor(props) {
    	super(props);
	    this.state = { };
  	}

  	render() {
  		const { getFieldDecorator } = this.props.form;
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

	    return (
	        <Row type="flex" className="candidate-signup-pageContainer">
	        	<Col sm={24}>
						<h1>Community Information</h1>
	        	<Form >
              <h3>Teaching Population (projected or actual)</h3>

              <FormItem
                {...formItemLayout}
                label="Number of Full Time Staff:"

              >
                {getFieldDecorator('full_time_staff', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Number of Part Time Staff:"

              >
                {getFieldDecorator('part_time_staff', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>



              <FormItem
			          {...formItemLayout}
			          label="Host Nationality"

			        >
			          {getFieldDecorator('host_nationality', {
			            rules: [{
			              required: true, message: 'Value is required',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>

              <FormItem
                {...formItemLayout}
                label="What percentage of faculty are graduates of English language colleges?"

              >
                {getFieldDecorator('percentage_graduates_of_english', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>

              <h3>Grade Range</h3>
              <FormItem
                {...formItemLayout}
                label="From"

              >
                {getFieldDecorator('grade_from', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="To"

              >
                {getFieldDecorator('grade_to', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>

              <h3>Enrollment (projected or actual)</h3>
              <p>Number of Students Enrolled by Grade</p>
              <FormItem
                {...formItemLayout}
                label="Nursery/Infants:"

              >
                {getFieldDecorator('no_of_nursery_students', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="PreK"

              >
                {getFieldDecorator('no_of_prek_students', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Elementary K-5"

              >
                {getFieldDecorator('no_of_elementary_students', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Middle School 6-8"

              >
                {getFieldDecorator('no_of_middle_school_students', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="High School 9-12"

              >
                {getFieldDecorator('no_of_high_school_students', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Grade 13"

              >
                {getFieldDecorator('no_of_grade_students', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>

              <h3>Nationalities Represented in Student Body</h3>

              <FormItem
                {...formItemLayout}
                label="US"

              >
                {getFieldDecorator('no_of_us_nationalities', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>


              <FormItem
                {...formItemLayout}
                label="UK"

              >
                {getFieldDecorator('no_of_uk_nationalities', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Host Nationality"

              >
                {getFieldDecorator('no_of_host_nationality_nationalities', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="All Others"

              >
                {getFieldDecorator('no_of_all_others_nationalities', {
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

export default Form.create()(SchoolRegisterPage_3);
