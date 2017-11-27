import React, { Component } from 'react';
import { Row, Col, Form, Input, InputNumber } from 'antd';

/*Import redux components*/
/*Redux imports*/
import { connect } from "react-redux";
import { registerApplicantDispatch, resetStore } from "../../../actions/Register_Actions";
import { bindActionCreators } from "redux";

/*import components*/
const FormItem = Form.Item;

class SchoolRegisterPage_4 extends Component {

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
						<h1>Tuition and Fees</h1>
	        	<Form >
              <h3>Tuition</h3>
	        		<FormItem
			          {...formItemLayout}
			          label="Currency Type"

			        >
			          {getFieldDecorator('currency_type', {
			            rules: [{
			              required: true, message: 'Please input Currency Type',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>

              <h3>Annual Tuition Range (for current school year):</h3>
              <FormItem
                {...formItemLayout}
                label="Low:"

              >
                {getFieldDecorator('low', {
                  rules: [{
                    required: true, message: 'Value is required',
                  }],
                })(
                  <InputNumber />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="High:"

              >
                {getFieldDecorator('high', {
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SchoolRegisterPage_4));
