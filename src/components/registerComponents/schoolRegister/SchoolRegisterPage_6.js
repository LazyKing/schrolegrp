import React, { Component } from 'react';
import { Row, Col, Form, Input, InputNumber } from 'antd';

/*Import redux components*/
/*Redux imports*/
import { connect } from "react-redux";
import { registerApplicantDispatch, resetStore } from "../../../actions/Register_Actions";
import { bindActionCreators } from "redux";

/*import components*/
const FormItem = Form.Item;

class SchoolRegisterPage_6 extends Component {

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
						<h1>Campus Facilities</h1>
	        	<Form >
              <h3>Campus Information</h3>
	        		<FormItem
			          {...formItemLayout}
			          label="Location Type"

			        >
			          {getFieldDecorator('location_type', {
			            rules: [{
			              required: true, message: 'Please input your Location Type',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>

              <FormItem
                {...formItemLayout}
                label="City (or closest city):"

              >
                {getFieldDecorator('city', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Campus Size (hectares):"

              >
                {getFieldDecorator('campus_size', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>

			        <FormItem
			          {...formItemLayout}
			          label="No of Buildings:"

			        >
			          {getFieldDecorator('no_of_buildings', {
			            rules: [{
			              required: true, message: 'Please input the No of Buildings',
			            }],
			          })(
			            <InputNumber />
			          )}
			        </FormItem>

			        <FormItem
			          {...formItemLayout}
			          label="No of Classrooms:"

			        >
			          {getFieldDecorator('no_of_classrooms', {
			            rules: [{
			              required: true, message: 'Please input no of Classrooms!',
			            }],
			          })(
			            <InputNumber />
			          )}
			        </FormItem>

              <FormItem
			          {...formItemLayout}
			          label="No of volumes in Library:"

			        >
			          {getFieldDecorator('no_of_volumes', {
			            rules: [{
			              required: true, message: 'Please input the # of volumes in Library',
			            }],
			          })(
			            <InputNumber />
			          )}
			        </FormItem>

              <FormItem
                {...formItemLayout}
                label="No of computer labs"

              >
                {getFieldDecorator('no_of_computer_labs', {
                  rules: [{
                    required: true, message: 'Please input # of computer labs!',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="No of instructional computers:"

              >
                {getFieldDecorator('no_of_instructional_computers', {
                  rules: [{
                    required: true, message: 'Please input # of instructional computers!',
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SchoolRegisterPage_6));
