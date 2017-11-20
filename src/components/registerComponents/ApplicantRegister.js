import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Modal } from 'antd';

/*Import redux components*/
/*Redux imports*/
import {  browserHistory  } from 'react-router'
import { connect } from "react-redux";
import { registerApplicantDispatch, resetStore } from "../../actions/Register_Actions";
import { bindActionCreators } from "redux";

/*import components*/
const FormItem = Form.Item;

class ApplicantRegister extends Component {

		constructor(props) {
    	super(props);

	    this.state = {
	      confirmDirty: ''
	    };
  	}

		componentWillReceiveProps(nextProps) {
			//console.log("componentWillReceiveProps -- register",nextProps);
			if( nextProps.authenticationAndRegistration ) {
				const { registrationSuccessStatus } = nextProps.authenticationAndRegistration;
				if( registrationSuccessStatus !== "" ) {
					if ( registrationSuccessStatus === 201 || registrationSuccessStatus === 200  ){
						const successModal=Modal;
						const modal= successModal.success({
					 		title: 'Applicant has been successfully registered',
					 		content: 'Confirmation email has been sent to your primary email address.Please follow the instructions to verify your email',
							okText: 'Ok',
							onOk() {
								 modal.destroy();
								 nextProps.resetStore('');
								 browserHistory.push({
									 pathname: '/Login'
								 });
							},
				 		});
			 	} else {
				const { errorMessage, errorSummary } = nextProps.authenticationAndRegistration;
				const errorModal=Modal;
				 const modal= errorModal.error({
					 		title: errorSummary,
					 		content: errorMessage,
							okText: 'Ok',
							onOk() {
								 modal.destroy(),
								 // browserHistory.push({
									//  pathname: '/Login'
								 // });
								 nextProps.resetStore('');
							},
				 		});
			 		}
				}
			}
		}

  	handleSubmit = (e) => {
    	e.preventDefault();
	    this.props.form.validateFieldsAndScroll((err, values) => {
	      if (!err) {
	        const { first_name, last_name, alt_email,
	        email, password, confirm_password, user_type='applicant' } = this.props.form.getFieldsValue();

					var userAuthentication = { email, password, confirm_password, user_type };
	        var user_info = { first_name, last_name, alt_email };
	        userAuthentication['user_info'] = user_info ;

	        this.props.registerApplicantDispatch( userAuthentication );
	      }
	    });
  	}

  	handleConfirmBlur = (e) => {
    	const value = e.target.value;
    	this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  	}

  	checkPassword = (rule, value, callback) => {
    	const form = this.props.form;
    	if (value && value !== form.getFieldValue('password')) {
      		callback('Two passwords that you enter is inconsistent!');
    	} else {
      		callback();
    	}
  	}

  	checkConfirm = (rule, value, callback) => {
    	const form = this.props.form;
    	if (value && this.state.confirmDirty) {
      		form.validateFields(['confirm'], { force: true });
    	}
    	callback();
  	}

		routeToHome = (event) => {
	    event.preventDefault();
	    event.stopPropagation();
	    browserHistory.push({
	        pathname: '/Login'
	    });
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
	        xs: {
	          span: 24,
	          offset: 0,
	        },
	        sm: {
	          span: 14,
	          offset: 6,
	        },
	      },
	    };

	    return (
	        <Row type="flex" className="candidate-signup-pageContainer">
	        	<Col sm={24}>
							<Row type="flex" justify="space-between">
								<Col>
	        				<h2>Candidate Signup</h2>
								</Col>
								<Col>
									<p>Already have an account?</p>
									<Button size="large" onClick={this.routeToHome}>Sign in</Button>
								</Col>
							</Row>
	        	</Col>

	        	<Col sm={24}>
	        		<hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', margin:'10px 0px' }}/>
	        	</Col>
	        	<Col>
	        		<h2>Welcome to Schrole™ Premium</h2>
	        		<p>You have started the process to find a new role in a great school.
 					Please note that you will need pay $75 AUD for a 12 month subscription to a Premium Account
 					for this application. You will then also be able to search and apply for jobs around the world from your own Schrole dashboard.</p>
	        		<p>If you don’t want to proceed please click Cancel to return to our homepage. You can apply to our
	        		featured schools there and can always apply directly through a schools own website for free.</p>
	        		<p>Please have the following ready before you commence to make the job as easy as possible for you.</p>
	        		<p>
	        			<li>CV in Word or PDF.</li>
	        			<li>Recent Passport sized photo in jpg or png image format.</li>
	        			<li>Copy of your teaching registration in PDF (optional).</li>
	        			<li>Referee details including email addresses and other contact details. Your referees will be contacted to provide a confidential reference. You may wish to let them know an email link will be sent to them,
	        			but sometimes this may be sent to the spam folder.</li>
	        			<li>You will also be asked to complete some questions set by the school. This may take some time as you will need to think carefully about your answers.
	        			Please note you can always edit and change details from your
	        			own dashboard once the application is complete so you will be able to make changes to questions from there if you want to complete the initial signup process quickly.</li>
	        		</p>
	        		<p>The process may take some time to complete, however you can log back in at any time to complete this process. Be aware that each section can be saved separately.
	        		To protect your privacy the system will log you out after 60 minutes of inactivity. Please save regularly.</p>
	        		<p>Schrole™ Admin</p>
	        	</Col>
	        	<Col sm={24}>
	        		<hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', margin:'10px 0px'}}/>
	        	</Col>
	        	<Col sm={24}>
						<h2>User Details</h2>
	        	<Form onSubmit={this.handleSubmit}>

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
			          label="Alternate E-mail"
			          hasFeedback
			        >
			          {getFieldDecorator('alt_email', {
			            rules: [{
			              type: 'email', message: 'The input is not valid E-mail!',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>

			        <FormItem
			          {...formItemLayout}
			          label="Password"
			          hasFeedback
			        >
			          {getFieldDecorator('password', {
			            rules: [{
			              required: true, message: 'Please input your password!',
			            }, {
			              validator: this.checkConfirm,
			            }],
			          })(
			            <Input type="password" />
			          )}
			        </FormItem>
			        <FormItem
			          {...formItemLayout}
			          label="Confirm Password"
			          hasFeedback
			        >
			          {getFieldDecorator('confirm_password', {
			            rules: [{
			              required: true, message: 'Please confirm your password!',
			            }, {
			              validator: this.checkPassword,
			            }],
			          })(
			            <Input type="password" onBlur={this.handleConfirmBlur} />
			          )}
			        </FormItem>


			        <FormItem
								{...tailFormItemLayout}
								extra="We'll send you an email to activate your account.">
			          <Button size="large" type="primary" htmlType="submit">Register</Button>
			        </FormItem>
	      		</Form>
	      		</Col>
	        </Row>
	    );
  	}
}

function mapStateToProps(state) {
  //console.log(state);
  return { authenticationAndRegistration: state.authenticationAndRegistration };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ registerApplicantDispatch:registerApplicantDispatch,
	resetStore:resetStore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ApplicantRegister));
