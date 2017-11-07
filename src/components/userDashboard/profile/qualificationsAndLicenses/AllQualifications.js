import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form, 
  Input, Icon, DatePicker, Select } from 'antd';
import _ from 'lodash';

/*import components*/
import QualificationCard from './QualificationCard';
import QualificationForm from './QualificationForm';

const FormItem = Form.Item;
const Option = Select.Option;

class AllQualifications extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    //console.log(this.props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      qualificationsArray:[],
      selectedQualification:{}
    }
  }
  
  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps AllQualifications", nextProps)
    this.setState({qualificationsArray:nextProps.qualificationsArray})
  }
  
  showModal = (props) => {
    const { target } = props;
    const selectedQualification = _.find( this.state.qualificationsArray, function(qualification) { 
      return qualification.id == target.id;
    });
    this.setState({
      visible: true,
      selectedQualification: (selectedQualification) ? selectedQualification : {}
    });
  }

  handleOk = () => {
    console.log(this.props.form.getFieldsValue());
    this.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        //update new data here
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
  render() {
    const listItems = this.state.qualificationsArray.map((qualification) =>
          <QualificationCard key={qualification.id} qualification={qualification} onclick={this.showModal}/> );

    return (
      <div className="qualification-mainContainer">
          <Modal title="Edit Qualification"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
            okText={'Save'}
            cancelText={'cancel'}
            width={'70%'}
          >
            <QualificationForm currentQualification = {this.state.selectedQualification} />
          </Modal>
        
          <Row type="flex" justify="center" style={{'marginTop':'10px'}}>
            <Col sm={22}>
              <Row type="flex" justify="space-between">
                <Col><h3>Qualifications</h3></Col>
                <Col><Button onClick={this.showModal}>Add another qulification </Button></Col>
              </Row>
              <Col>
                <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'marginTop': 10 }}/>
              </Col>
              <Row>
                {listItems}
              </Row>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Form.create()(AllQualifications);
