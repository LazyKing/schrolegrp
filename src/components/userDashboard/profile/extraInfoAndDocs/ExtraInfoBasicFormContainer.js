import React, { Component } from 'react';
import { Form, Row, Col, Button, Modal } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateExtraInfoBasicDetailsDispatch } from "./ExtraInforAndDocs_Actions";

/*import components*/
import ExtraInfoBasicForm from './ExtraInfoBasicForm';

class ExtraInfoBasicFormContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			extraInfoDetails: {},
			visibleExtraInfoForm: false,
	  	confirmLoadingExtraInfoForm: false,
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps ExtraInfoBasicFormContainer", nextProps)
		const { extraInfoDetails } = nextProps;
		this.setState({ extraInfoDetails });
	}

	showExtraInfoFormModal = (props) => {
    	this.setState({ visibleExtraInfoForm: true })
	}

  handleExtraInfoFormOk = () => {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }

    var payloadObj = this._extraInfoFormProps.props.form.getFieldsValue();
		payloadObj.registered_teacher = ( payloadObj.registered_teacher === 'yes' ) ? true : false ;

    this._extraInfoFormProps.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        this.props.updateExtraInfoBasicDetailsDispatch(logoutPayloadHeader, payloadObj );
        this.setState({ confirmLoadingExtraInfoForm: true });
        setTimeout(() => {
          this.setState({ visibleExtraInfoForm: false, confirmLoadingExtraInfoForm: false });
        }, 2000);
      }
    });
  }

  handleExtraInfoFormCancel = () => {
    this.setState({ visibleExtraInfoForm: false });
  }

  render() {
		//console.log(this.state);
  	return (
  		<div className="extra_info_basic_container">
				<Modal className="card-header-background" 
					title="Edit Qualification"
					visible={this.state.visibleExtraInfoForm}
					onOk={this.handleExtraInfoFormOk}
					confirmLoading={this.state.confirmLoadingExtraInfoForm}
					onCancel={this.handleExtraInfoFormCancel}
					okText={'Save'}
					cancelText={'cancel'}
					width={'70%'}
				>
					<ExtraInfoBasicForm extraInfoDetails={this.state.extraInfoDetails}
						wrappedComponentRef={(ref) => this._extraInfoFormProps = ref} />
				</Modal>
  			<Row>
  				<Col>
  					<Row type="flex" justify="space-between">
  					<Col >
  						<h2>Extra Information</h2>
  					</Col>
  					<Col >
  						<Button onClick={this.showExtraInfoFormModal}> Edit </Button>
  					</Col>
  					</Row>
  				</Col>
  				<hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid' }}/>
  				<Col >
  					<Row type="flex" justify="space-between" className="first-data-row">
		              <Col><span><strong>Registered Teacher?</strong></span></Col>
		              <Col><span>{this.state.extraInfoDetails.registered_teacher ? 'Yes' : 'No'}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Total number of years of full-time relevant/teaching experience</strong></span></Col>
		              <Col><span>{this.state.extraInfoDetails.total_relevant_experience}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Activities you can lead or coach</strong></span></Col>
		              <Col><span>{this.state.extraInfoDetails.can_coach_activities}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Interests</strong></span></Col>
		              <Col><span>{this.state.extraInfoDetails.interests}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Skills</strong></span></Col>
		              <Col><span>{this.state.extraInfoDetails.skills}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Experiences</strong></span></Col>
		              <Col><span>{this.state.extraInfoDetails.other_experiences}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Comments</strong></span></Col>
		              <Col><span>{this.state.extraInfoDetails.comments}</span></Col>
            		</Row>
  				</Col>
  			</Row>
  		</div>
  	);
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps, extrainfo",state);
  return { extraInfoDetails:  state.applicants.extraInfo };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateExtraInfoBasicDetailsDispatch:updateExtraInfoBasicDetailsDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(ExtraInfoBasicFormContainer));
