import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Modal } from 'antd';

/*Import redux components*/
/*Redux imports*/
import { connect } from "react-redux";
import { registerApplicantDispatch, resetStore } from "../../../actions/Register_Actions";
import { bindActionCreators } from "redux";

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
			//console.log("componentWillReceiveProps -- register",nextProps);
			// if( nextProps.authenticationAndRegistration ) {
			// 	const { registrationSuccessStatus } = nextProps.authenticationAndRegistration;
			// 	if( registrationSuccessStatus !== "" ) {
			// 		if ( registrationSuccessStatus === 201 || registrationSuccessStatus === 200  ){
			// 			const successModal=Modal;
			// 			const modal= successModal.success({
			// 		 		title: 'Applicant has been successfully registered',
			// 		 		content: 'Confirmation email has been sent to your primary email address.Please follow the instructions to verify your email',
			// 				okText: 'Ok',
			// 				onOk() {
			// 					 modal.destroy();
			// 					 nextProps.resetStore('');
			// 					 browserHistory.push({
			// 						 pathname: '/Login'
			// 					 });
			// 				},
			// 	 		});
			//  	} else {
			// 	const { errorMessage, errorSummary } = nextProps.authenticationAndRegistration;
			// 	const errorModal=Modal;
			// 	 const modal= errorModal.error({
			// 		 		title: errorSummary,
			// 		 		content: errorMessage,
			// 				okText: 'Ok',
			// 				onOk() {
			// 					 modal.destroy(),
			// 					 // browserHistory.push({
			// 						//  pathname: '/Login'
			// 					 // });
			// 					 nextProps.resetStore('');
			// 				},
			// 	 		});
			//  		}
			// 	}
			// }
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
			          label="School Name"
			          hasFeedback
			        >
			          {getFieldDecorator('school_name', {
			            rules: [{
			              required: true, message: 'Please input your School name',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>

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

function mapStateToProps(state) {
  //console.log(state);
  return { };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ registerApplicantDispatch:registerApplicantDispatch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SchoolRegisterPage_1));
