import React, { Component } from 'react';
import { Button, Row, Col, Modal } from 'antd';
import _ from 'lodash';

/*Import Redux functionalities*/
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { updateLicenceDispatch, createLicenceDispatch } from "./QualificationAndLicences_Actions";

/*import components*/
 import AdministrativeReferencesCard from './AdministrativeReferencesCard';
 //import AdministrativeReferencesForm from './AdministrativeReferencesForm';

class AdministrativeReferences extends Component {

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
    // const listItems = this.state.licencesArray.map((licence) =>
    //       <LicenceCard key={licence.id} licence={licence} onclick={this.showModal}/> );
    // const FormHeader = this.state.editMode ? ('Edit Licence') : ('Add Licence');

    /*
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
    <LicenceForm currentLicence={this.state.selectedLicence}
    wrappedComponentRef={(ref) => this._licenceFormProps = ref}/>
    </Modal>*/
    
    return (
      <div className="academic-reference-mainContainer">
          <Row style={{'marginTop':'10px'}}>
            <Col sm={24}>
              <Row className="column-alignItems-center">
                <Col><h3>Administrative References</h3></Col>
                <Col><p>Add Administrative referees if applying/registering for leadership roles or other positions such as counselor or psychologist.</p></Col>
                <Col><Button onClick={this.showModal}>ADD ADMINISTRATIVE REFEREE </Button></Col>
              </Row>
              <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'marginTop': 20 }}/>
              <Row>
                <Col>
                  <AdministrativeReferencesCard />
                </Col>
              </Row>
            </Col>
          </Row>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   //console.log("mapStateToProps, licences",state);
//   return { licencesArray:  state.applicants.qualificationsDetails.licences };
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ updateLicenceDispatch: updateLicenceDispatch,
//   createLicenceDispatch:createLicenceDispatch }, dispatch);
// }

//export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(AcademicReferences));
export default AdministrativeReferences;
