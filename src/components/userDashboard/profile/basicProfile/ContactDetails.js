import React, { Component } from 'react';
import { Button, Row, Col, Card, Icon,
          Modal, Form, Input } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateApplicantsContactDetailsDispatch } from "../../../../actions";

const FormItem = Form.Item;

class ContactDetails extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      visible: false,
      confirmLoading: false,
      showDescription: false,
      contact_details:{}
    }
  }
    
  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps emergency", nextProps)
    this.setState({contact_details:nextProps.contact_details})
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    //console.log(this.props.form.getFieldsValue());
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    this.props.updateApplicantsContactDetailsDispatch(logoutPayloadHeader, this.props.form.getFieldsValue());
              this.setState({
            visible: false,
            confirmLoading: false,
          });

/*    this.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        //update new data here
        this.setState({
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      }
    });*/
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
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
        sm: { span: 14 },
      },
    };

    return (
        <Card title="Contact Details" extra={<Button onClick={this.showModal}>Edit</Button>}>
          
          <Modal title="Contact Details"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
            okText={'Save'}
            cancelText={'cancel'}
            width={'80%'}
          >
            <Form>              
              <FormItem
                {...formItemLayout}
                label="Address"
              >
                {getFieldDecorator('address_line_1', { initialValue: this.state.contact_details.address_line_1 })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label=" "
              >
                {getFieldDecorator('address_line_2', { initialValue: this.state.contact_details.address_line_2 })(
                  <Input />
                )}
              </FormItem>              
              <FormItem
                {...formItemLayout}
                label="Suburb"
              >
                {getFieldDecorator('suburb', { initialValue: this.state.contact_details.suburb })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="City"
              >
                {getFieldDecorator('city', { initialValue: this.state.contact_details.city })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="State"
              >
                {getFieldDecorator('state', { initialValue: this.state.contact_details.state })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Postcode"
              >
                {getFieldDecorator('postcode', { initialValue: this.state.contact_details.postcode })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Country"
              >
                {getFieldDecorator('country', { initialValue: this.state.contact_details.country })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Email Address"
              >
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  }],
                  initialValue: this.state.contact_details.email
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Alternative Email Address"
              >
                {getFieldDecorator('alt_email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  }],
                  initialValue: this.state.contact_details.alt_email
                })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Phone Number"
              >
                {getFieldDecorator('phone', { initialValue: this.state.contact_details.phone })(
                  <Input placeholder="eg: +6112345678" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Skype Address"
              >
                {getFieldDecorator('skype', { initialValue: this.state.contact_details.skype })(
                  <Input placeholder="eg: +6112345678" />
                )}
              </FormItem>
            </Form>
            
          </Modal>

          <div>
            <Row type="flex" justify="start">
              <Col><span><Icon type="mail" style={{'paddingRight':3}} />{this.state.contact_details.email}</span></Col>
            </Row>
             <Row type="flex" justify="space-between">
              <Col><span><strong>Phone Number</strong></span></Col>
              <Col><span>{this.state.contact_details.phone}</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Skype Address</strong></span></Col>
              <Col><span>{this.state.contact_details.skype}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Permanent Address</strong></span></Col>
              <Col>
              <span>
                {this.state.contact_details.address_line_1} , 
                {this.state.contact_details.address_line_2} , 
                {this.state.contact_details.state} , 
                {this.state.contact_details.country}
              </span>
              </Col>
            </Row>
          </div>
        </Card>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps-qalifications",state);
  return { contactDetails: state.applicants.applicantsProfile.contact_details};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateApplicantsContactDetailsDispatch: updateApplicantsContactDetailsDispatch }, dispatch);
}


export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(ContactDetails));