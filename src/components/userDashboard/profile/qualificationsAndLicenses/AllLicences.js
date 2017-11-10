import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form, 
  Input, Icon, DatePicker, Select } from 'antd';
import _ from 'lodash';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateLicenceDispatch, createLicenceDispatch } from "./QualificationAndLicences_Actions";

/*import components*/
import LicenceCard from './LicenceCard';
import LicenceForm from './LicenceForm';

const FormItem = Form.Item;

class AllLicences extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false,
      licencesArray:[],
      selectedLicence:{}
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({licencesArray:nextProps.licencesArray})
  }

  showModal = (props) => {
    const { target } = props;
    if( target.className.indexOf('edit_license') !== -1 ) {
      const selectedLicence = _.find( this.state.licencesArray, function(licence) { 
        return licence.id == target.id;
      });

      this.setState({
        visible: true,
        editMode: true,
        selectedLicence: (selectedLicence) ? selectedLicence : {}
      }); 
    } else {
      this.setState({ visible: true, editMode: false });
    }
  }

  handleOk = () => {
    //console.log(this._licenceFormProps.props.form.getFieldsValue());
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email };
    var payloadObj = this._licenceFormProps.props.form.getFieldsValue();
    console.log(payloadObj);

    this._licenceFormProps.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        if(this.state.editMode){
          this.props.updateLicenceDispatch(logoutPayloadHeader, payloadObj, this.state.selectedLicence.id );
        }
        else
          this.props.createLicenceDispatch(logoutPayloadHeader, payloadObj);

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
    const listItems = this.state.licencesArray.map((licence) =>
          <LicenceCard key={licence.id} licence={licence} onclick={this.showModal}/> );

    return (
      <div className="qualification-mainContainer">
          <Modal title="Edit licence"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
            okText={'Save'}
            cancelText={'cancel'}
            width={'70%'}
          >
          <LicenceForm currentLicence={this.state.selectedLicence}
          wrappedComponentRef={(ref) => this._licenceFormProps = ref}/>
          </Modal>
        
          <Row type="flex" justify="center" style={{'marginTop':'10px'}}>
            <Col sm={22}>
              <Row type="flex" justify="space-between">
                <Col><h3>Licences (optional)</h3></Col>
                <Col><Button onClick={this.showModal}>Add another licence </Button></Col>
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
  console.log("mapStateToProps, licences",state);
  return { licencesArray:  state.applicants.qualificationsDetails.licences };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateLicenceDispatch: updateLicenceDispatch, 
  createLicenceDispatch:createLicenceDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(AllLicences));
