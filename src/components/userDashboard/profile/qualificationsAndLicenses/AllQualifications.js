import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form,
  Input, Icon, DatePicker, Select } from 'antd';
import _ from 'lodash';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createNewQualificationDispatch, updateQualificationDispatch } from "./QualificationAndLicences_Actions";

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
      editMode: false,
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

    if( target.className.indexOf('edit_qualification') !== -1 ) {
      const selectedQualification = _.find( this.state.qualificationsArray, function(qualification) {
        return qualification.id == target.id;
      });
      this.setState({
        visible: true,
        editMode: true,
        selectedQualification: (selectedQualification) ? selectedQualification : {}
      });
    } else {
      this.setState({
        visible: true,
        editMode: false,
        selectedQualification: {}
      });
    }
  }

  handleOk = () => {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }

    var payloadObj = this._qualificationFormProps.props.form.getFieldsValue();
    payloadObj.dob = this._qualificationFormProps.props.form.getFieldsValue().date_of_completion._i;
    //console.log(payloadObj);

    this._qualificationFormProps.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {

        if(this.state.editMode){
          this.props.updateQualificationDispatch(logoutPayloadHeader, payloadObj, this.state.selectedQualification.id );
        }
        else
          this.props.createNewQualificationDispatch(logoutPayloadHeader, payloadObj);

        this.setState({
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            editMode: false,
            confirmLoading: false,
          });
        }, 2000);
      }
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
      editMode: false
    });
  }
  render() {
    const FormHeader = this.state.editMode ? ('Edit Qualification') : ('Add Qualification');
    const listItems = this.state.qualificationsArray.map((qualification) =>
          <QualificationCard key={qualification.id} qualification={qualification} onclick={this.showModal}/> );

    return (
      <div className="qualification-mainContainer">
          <Modal className="card-header-background" 
            title={FormHeader}
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
            okText={'Save'}
            cancelText={'cancel'}
            width={'70%'}
          >
            <QualificationForm
            currentQualification = {this.state.selectedQualification}
            wrappedComponentRef={(ref) => this._qualificationFormProps = ref} />
          </Modal>

          <Row type="flex" justify="center" style={{'marginTop':'10px'}}>
            <Col sm={22}>
              <Row type="flex" justify="space-between">
                <Col><h3>Qualifications</h3></Col>
                <Col><Button className="add_qualification" onClick={this.showModal}>Add another qulification </Button></Col>
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

function mapStateToProps(state) {
  //console.log("mapStateToProps, qualification",state);
  return { qualificationsArray:  state.applicants.qualificationsDetails.qualifications };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewQualificationDispatch: createNewQualificationDispatch,
  updateQualificationDispatch:updateQualificationDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(AllQualifications));
