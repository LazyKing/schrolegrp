import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { getExtraInfoBsicDetailsDispatch } from "./ExtraInforAndDocs_Actions";

class ExtraInfoBasicFormContainer extends Component { 
	
	constructor(props) {
		super(props);
		this.state = {
			extraInfoDetails: {},
			visible: false,
	  		confirmLoading: false,
		}
	}

	componentWillReceiveProps(nextProps) {
		//console.log("componentWillReceiveProps ExtraInfoBasicFormContainer", nextProps)
		const { extraInfoDetails } = nextProps;
		this.setState({ extraInfoDetails });
	}

	showModal = (props) => {
    	//const { target } = props;
    	this.setState({ visible: true }) 
	}

  handleOk = () => {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }

    //var payloadObj = this._qualificationFormProps.getFieldsValue();
    //console.log(payloadObj);
    
    this.setState({
      visible: false,
      confirmLoading: false,
    });
    /*this._qualificationFormProps.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        //this.props.updateQualificationDispatch(logoutPayloadHeader, payloadObj, this.state.selectedQualification.id );
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
    this.setState({ visible: false });
  }

  render() {

  	return (
  		<div>
  			<Row>
  				<Col>
  					<Row type="flex" justify="space-between">
  					<Col >
  						<h2>Extra Information</h2>
  					</Col>
  					<Col >
  						<Button> Edit </Button>
  					</Col>	
  					</Row>
  				</Col>
  				<hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid' }}/>
  				<Col >
  					<Row type="flex" justify="space-between" className="first-data-row">
		              <Col><span><strong>Registered Teacher?</strong></span></Col>
		              <Col><span>{this.state.registered_teacher ? 'Yes' : 'No'}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Total number of years of full-time relevant/teaching experience</strong></span></Col>
		              <Col><span>{this.state.registered_teacher}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Activities you can lead or coach</strong></span></Col>
		              <Col><span>{this.state.can_coach_activities}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Interests</strong></span></Col>
		              <Col><span>{this.state.interests}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Skills</strong></span></Col>
		              <Col><span>{this.state.skills}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Experiences</strong></span></Col>
		              <Col><span>{this.state.other_experiences}</span></Col>
            		</Row>
            		<Row type="flex" justify="space-between" className="data-display-row-styles">
		              <Col><span><strong>Comments</strong></span></Col>
		              <Col><span>{this.state.comments}</span></Col>
            		</Row>
  				</Col>
  			</Row>
  		</div>
  	);
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps, extrainfo",state);
  return { };
  //return { extraInfoDetails:  state.applicants.extraInfo };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(ExtraInfoBasicFormContainer));