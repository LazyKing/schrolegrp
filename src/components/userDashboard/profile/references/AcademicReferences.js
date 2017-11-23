import React, { Component } from 'react';
import { Button, Row, Col, Modal } from 'antd';
import _ from 'lodash';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateAcademicReferencesDispatch, createNewAcademicReferenceDispatch} from "./References_Actions";

/*import components*/
import AcademicReferencesCard from './AcademicReferencesCard';
import AcademicReferencesForm from './AcademicReferencesForm';

class AcademicReferences extends Component {

  constructor(props) {
    super(props);
    this.state = {
      academicModalVisible: false,
      academicModalLoading: false,
      academicReferenceArray:[],
      selectedAcademicReference:{}
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({academicReferenceArray:nextProps.academicReferences})
  }

  showAcademicModal = (props) => {
    const { target } = props;
    if( target.className.indexOf('edit_academic_reference') !== -1 ) {
      const selectedAcademicReference = _.find( this.state.academicReferenceArray, function(currentAcademicReference) {
        return currentAcademicReference.id == target.id;
      });

      this.setState({
        academicModalVisible: true,
        editMode: true,
        selectedAcademicReference: (selectedAcademicReference) ? selectedAcademicReference : {}
      });
    } else {
      this.setState({ academicModalVisible: true, editMode: false });
    }
  }

  onAademicModalOk = () => {
    //console.log(this._academicReferenceFormProps.props.form.getFieldsValue());
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email };
    var payloadObj = this._academicReferenceFormProps.props.form.getFieldsValue();

    this._academicReferenceFormProps.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        if(this.state.editMode){
          this.props.updateAcademicReferencesDispatch(logoutPayloadHeader, payloadObj, this.state.selectedAcademicReference.id );
        }
        else
          this.props.createNewAcademicReferenceDispatch(logoutPayloadHeader, payloadObj);

        this.setState({
          academicModalLoading: true,
        });
        setTimeout(() => {
          this.setState({
            academicModalVisible: false,
            editMode: false,
            academicModalLoading: false,
          });
        }, 2000);
      }
    });
  }

  onAademicModalCancel = () => {
    this.setState({
      academicModalVisible: false,
      editMode: false
    });
  }
  render() {
     const listItems = this.state.academicReferenceArray.map((academicReference) =>
           <AcademicReferencesCard key={academicReference.id} academicReference={academicReference} onclick={this.showAcademicModal}/> );
     const FormHeader = this.state.editMode ? ('Edit Licence') : ('Add Licence');

    return (
      <div className="academic-reference-mainContainer">
        <Modal className="card-header-background"
          title={FormHeader}
          visible={this.state.academicModalVisible}
          onOk={this.onAademicModalOk}
          confirmLoading={this.state.academicModalLoading}
          onCancel={this.onAademicModalCancel}
          okText={'Save'}
          cancelText={'cancel'}
          width={'70%'}
        >
        <AcademicReferencesForm currentAcademicReference={this.state.selectedAcademicReference}
        wrappedComponentRef={(ref) => this._academicReferenceFormProps = ref}/>
        </Modal>
        <Row style={{'marginTop':'10px'}}>
          <Col sm={24}>
            <Row className="column-alignItems-center">
              <Col><h3>Academic References</h3></Col>
              <Col><p>Add Academic referees if applying/registering for teaching positions.</p></Col>
              <Col><Button onClick={this.showAcademicModal}>ADD ACADEMIC REFEREE</Button></Col>
            </Row>
            <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'marginTop': 20 }}/>
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
  //console.log("mapStateToProps, licences",state);
  return { academicReferenceArray:  state.applicants.references.academicReferences };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateAcademicReferencesDispatch,
  createNewAcademicReferenceDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(AcademicReferences);
