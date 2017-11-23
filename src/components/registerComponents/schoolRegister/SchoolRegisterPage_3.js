import React, { Component } from 'react';
import { Row, Col, Form, Input, InputNumber } from 'antd';

/*Import redux components*/
/*Redux imports*/
import { connect } from "react-redux";
import { registerApplicantDispatch, resetStore } from "../../../actions/Register_Actions";
import { bindActionCreators } from "redux";

/*import components*/
const FormItem = Form.Item;

class SchoolRegisterPage_3 extends Component {

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
                {getFieldDecorator('nursery', {
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
                {getFieldDecorator('prek', {
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
                {getFieldDecorator('elementary', {
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
                {getFieldDecorator('middle_school', {
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
                {getFieldDecorator('high_school', {
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
                {getFieldDecorator('grade', {
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
                {getFieldDecorator('us', {
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
                {getFieldDecorator('uk', {
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
                  <InputNumber />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="All Others"

              >
                {getFieldDecorator('all_others', {
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

function mapStateToProps(state) {
  //console.log(state);
  return { };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ registerApplicantDispatch:registerApplicantDispatch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SchoolRegisterPage_3));
