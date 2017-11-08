import React, { Component } from 'react';
import { Button, Row, Col, Card, 
  Icon, Modal, Form } from 'antd';
import _ from 'lodash';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createNewDependantDispatch } from "../../../../actions";

/*import components*/
import DependentItem from './dependents/DependentItem';
import DependentForm from './dependents/DependentForm';

class Dependents extends Component {

  constructor(props) {
    super(props);
      this.state = {
        visible: false,
        confirmLoading: false,
        dependentsArray:[],
        selectedDependent:{}
      }
  }
    
  showModal = (props) => {
    const { target } = props;
    const selectedDependent = _.find( this.state.dependentsArray, function(dependent) { 
      return dependent.id == target.id;
    });

    this.setState({
      visible: true,
      selectedDependent: (selectedDependent) ? selectedDependent : {}
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps - dependents",nextProps);
    this.setState({dependentsArray: nextProps.dependentsArray});
  }
  
  componentDidMount() {
    console.log(this.props);
  }

  handleOk = () => {
    
    //console.log(this._stepOne.getFieldsValue());
    var payloadObj = this._stepOne.getFieldsValue();
    payloadObj.dob = this._stepOne.getFieldsValue().dob._i;

    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    
    this.props.createNewDependantDispatch(logoutPayloadHeader, payloadObj);
              this.setState({
            visible: false,
            confirmLoading: false,
          });
    /*this.props.form.validateFields((err, values) => {
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
    console.log("props obj",this.props)
    console.log("state obj",this.state)
    //this.setState({dependentsArray: nextProps.dependentsArray});
    const listItems = this.state.dependentsArray.map((dependent) =>
          <DependentItem key={dependent.id} id={dependent.id} dependent={dependent}/> );
    return (
        <Card title="Dependents" extra={<div><Button onClick={this.showModal}>Add Dependent</Button></div>}>
          <Modal title="Edit licence"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
            okText={'Save'}
            cancelText={'cancel'}
            width={'60%'}
          >
            <DependentForm ref={(ref) => this._stepOne = ref}/>
          </Modal>
          <div>
            {listItems}
          </div>
        </Card>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps - dependents",state);
  return { dependentsArray:  state.applicants.applicantsProfile.dependents };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewDependantDispatch: createNewDependantDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(Dependents));