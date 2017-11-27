import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Modal } from 'antd';

/*Import redux components*/
/*Redux imports*/
import { connect } from "react-redux";
import { registerApplicantDispatch, resetStore } from "../../../actions/Register_Actions";
import { bindActionCreators } from "redux";

/*import components*/
const FormItem = Form.Item;

class SchoolRegisterPage_2 extends Component {

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
						<h1>Academic Heads</h1>
	        	<Form >
              <FormItem
                {...formItemLayout}
                label="Name"
                hasFeedback
              >
                {getFieldDecorator('name', {
                  rules: [{
                    required: true, message: 'This field is required!',
                  }],
                })(
                  <Input />
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
                label="Middle Name"
                hasFeedback
              >
                {getFieldDecorator('middle_name', {
                  rules: [{
                    required: true, message: 'Please input your Middle name!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Designation"
                hasFeedback
              >
                {getFieldDecorator('designation', {
                  rules: [{
                    required: true, message: 'Please input your designation!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Title"
                hasFeedback
              >
                {getFieldDecorator('title', {
                  rules: [{
                    required: true, message: 'Please input your title!',
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SchoolRegisterPage_2));
