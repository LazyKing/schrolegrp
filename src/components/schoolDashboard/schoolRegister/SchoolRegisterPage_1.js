import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';

/*import components*/
const FormItem = Form.Item;

class SchoolRegisterPage_1 extends Component {

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
						<h1>School information</h1>
	        	<Form >
              <h3>Address</h3>

              <FormItem
                {...formItemLayout}
                label="Street 1"
                hasFeedback
              >
                {getFieldDecorator('street_1', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Street 2"
                hasFeedback
              >
                {getFieldDecorator('street_2', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

			        <FormItem
			          {...formItemLayout}
			          label="City"
			          hasFeedback
			        >
			          {getFieldDecorator('city', {
			            rules: [{
			              required: true, message: 'Please input your City',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>

			        <FormItem
			          {...formItemLayout}
			          label="State/Province"
			          hasFeedback
			        >
			          {getFieldDecorator('state', {
			            rules: [{
			              required: true, message: 'Please input your state!',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>

              <FormItem
			          {...formItemLayout}
			          label="Postal Code"
			          hasFeedback
			        >
			          {getFieldDecorator('postal_code', {
			            rules: [{
			              required: true, message: 'Please input your Postal Code!',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>

              <FormItem
                {...formItemLayout}
                label="country"
                hasFeedback
              >
                {getFieldDecorator('country', {
                  rules: [{
                    required: true, message: 'Please input your country!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Phone"
                hasFeedback
              >
                {getFieldDecorator('phone', {
                  rules: [{
                    required: true, message: 'Please input your Phone',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Fax"
                hasFeedback
              >
                {getFieldDecorator('fax', {
                  rules: [{
                    required: true, message: 'Please input your Fax no',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Geographic Location"
                hasFeedback
              >
                {getFieldDecorator('geographic_region', {
                  rules: [{
                    required: true, message: 'Please input your geographic region',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <h3>Internet</h3>

              <FormItem
                {...formItemLayout}
                label="Website"
                hasFeedback
              >
                {getFieldDecorator('website', {
                  rules: [{
                    required: true, message: 'Please input your website url!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Year Founded"
                hasFeedback
              >
                {getFieldDecorator('year_founded', {
                  rules: [{
                    required: true, message: 'Please input the year founded!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Governed by"
                hasFeedback
              >
                {getFieldDecorator('governed_by', {
                  rules: [{
                    required: true, message: 'Please input the Governed by!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <h3>Directory Contact Person</h3>
              <FormItem
                {...formItemLayout}
                label="Person/Submitted by"
                hasFeedback
              >
                {getFieldDecorator('submitted_by', {
                  rules: [{
                    required: true, message: 'Please input the Submitted by!',
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
                {getFieldDecorator('submitted_by_email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  }, {
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

	      		</Form>
	      		</Col>
	        </Row>
	    );
  	}
}

export default Form.create()(SchoolRegisterPage_1);
