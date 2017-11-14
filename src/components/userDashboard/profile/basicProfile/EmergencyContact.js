import React, { Component } from 'react';
import { Button, Row, Col, Card,
  Modal, Form, Input, Icon } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateEmergencyDetailsDispatch } from "../../../../actions";

const FormItem = Form.Item;

class EmergencyContact extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      emergency_contact:{
        emergency_contact_email:"",
        emergency_contact_name:"",
        emergency_contact_phone:"",
        relationship_to_candidate:""
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps emergency", nextProps)
    this.setState({emergency_contact:nextProps.emergency_contact})
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
    this.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        //update new data here
        this.props.updateEmergencyDetailsDispatch( logoutPayloadHeader, this.props.form.getFieldsValue())
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
    });
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
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    return (
        <Card className="card-header-background" style={{'marginTop':'10px'}} title="Emergency Contact (optional)" extra={<Button onClick={this.showModal}>Edit</Button>}>
          <Modal title="Emergency Contact"
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
                label="E-mail"
              >
                {getFieldDecorator('emergency_contact_email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  }],
                  initialValue: this.state.emergency_contact.emergency_contact_email
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Full name"
              >
                {getFieldDecorator('emergency_contact_name', { initialValue: this.state.emergency_contact.emergency_contact_name })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Relationship to you"
              >
                {getFieldDecorator('relationship_to_candidate', { initialValue: this.state.emergency_contact.relationship_to_candidate })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Phone"
              >
                {getFieldDecorator('emergency_contact_phone', { initialValue: this.state.emergency_contact.emergency_contact_phone })(
                  <Input placeholder="eg: +6112345678" />
                )}
              </FormItem>
            </Form>
          </Modal>

          <div>
            <Row type="flex" justify="space-between">
              <Col><strong> {this.state.emergency_contact.emergency_contact_name} ({this.state.emergency_contact.relationship_to_candidate})</strong></Col>
            </Row>
            <Row>
              <Col sm={24}><span><Icon type="mail" />{this.state.emergency_contact.emergency_contact_email}</span></Col>
              <Col sm={24}><span><Icon type="phone" />{this.state.emergency_contact.emergency_contact_phone}</span></Col>
            </Row>
          </div>
        </Card>
    );
  }
}


function mapStateToProps(state) {
  //console.log("mapStateToProps",state);
  return { applicantsProfilePayload: state.applicants};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateEmergencyDetailsDispatch: updateEmergencyDetailsDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(EmergencyContact));
