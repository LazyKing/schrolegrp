import React, { Component } from 'react';
import { Button, Row, Col, Card,
          Modal, Form, Input, Select } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCriminalRecorsDispatch } from "../../../../actions";

const FormItem = Form.Item;
const Option = Select.Option;

class CriminalConvictions extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      visible: false,
      confirmLoading: false,
      showDescription: false,
      criminal_convictions:{}
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps emergency", nextProps)
    this.setState({criminal_convictions:nextProps.criminal_convictions})
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    console.log(this.props.form.getFieldsValue());
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    this.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        this.props.updateCriminalRecorsDispatch(logoutPayloadHeader, this.props.form.getFieldsValue());
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
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

  handleSelectChange = (value) => {
    ( value === 'no' ) ? this.setState({showDescription:false}) : this.setState({showDescription:true});
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
        <Card style={{'marginTop':'10px'}} title="Criminal Convictions" extra={<Button onClick={this.showModal}>Edit</Button>}>
          <Modal title="Emergency Contact"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
            okText={'Save'}
            cancelText={'cancel'}
            width={'60%'}
          >
            <Form>
              <FormItem
                {...formItemLayout}
                label="Do you have any criminal convictions?"
              >
                {getFieldDecorator('criminal_convicted', { initialValue: this.state.criminal_convictions.criminal_convicted ? 'yes' : 'no' })(
                <Select
                  onChange={this.handleSelectChange}
                >
                  <Option value="no">No</Option>
                  <Option value="yes">Yes</Option>
                </Select>
                )}
              </FormItem>
              <FormItem
                style={{'display': this.state.showDescription ? 'block' : 'none'}}
                {...formItemLayout}
                label="Please provide more details on this"
              >
                {getFieldDecorator('criminal_convicted_value', { initialValue: this.state.criminal_convictions.criminal_convicted_value })(
                  <Input.TextArea rows={4} />
                )}
              </FormItem>
            </Form>
          </Modal>
          <div>
             <Row type="flex">
              <Col>
              <span><strong>
              {this.state.criminal_convictions.criminal_convicted ? 'Yes:' : 'No'}
              </strong></span>
              </Col>
              <Col><span>{this.state.criminal_convictions.criminal_convicted_value}</span></Col>
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
  return bindActionCreators({ updateCriminalRecorsDispatch: updateCriminalRecorsDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(CriminalConvictions));