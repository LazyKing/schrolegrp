import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'antd';
import _ from 'lodash';

/*Redux imports*/
 import { Link, browserHistory } from 'react-router';
import { connect } from "react-redux";
import { updateSchoolDetailsDispatch, getSchoolDetailsDispatch } from "../School_Actions";
import { bindActionCreators } from "redux";

/*import components*/
import SchoolRegisterPage_1 from './SchoolRegisterPage_1';
import SchoolRegisterPage_2 from './SchoolRegisterPage_2';
import SchoolRegisterPage_3 from './SchoolRegisterPage_3';
import SchoolRegisterPage_4 from './SchoolRegisterPage_4';
import SchoolRegisterPage_5 from './SchoolRegisterPage_5';
import SchoolRegisterPage_6 from './SchoolRegisterPage_6';
import SchoolRegisterPage_8 from './SchoolRegisterPage_8';

var stepCountGlobal = 1;
const schoolFormMappings = {
    'step_1': SchoolRegisterPage_1,
    'step_2': SchoolRegisterPage_2,
    'step_3': SchoolRegisterPage_3,
    'step_4': SchoolRegisterPage_4,
    'step_5': SchoolRegisterPage_5,
    'step_6': SchoolRegisterPage_6,
    'step_7': 'SchoolRegisterPage_7',
    'step_8': SchoolRegisterPage_8
}

class SchoolRegisterBasicPage extends Component {

		constructor(props) {
    	super(props);

	    this.state = {
        stepCount: 1,
        currentForm: SchoolRegisterPage_1,
        schoold_id:'',
	      confirmDirty: ''
	    };
  	}

		componentWillReceiveProps(nextProps) {
			//console.log("componentWillReceiveProps -- register",nextProps);
      const schoolDetails = nextProps && nextProps.schoolDetails;
      if( schoolDetails ) {
        const { id, details_updated, step_no } = schoolDetails;
        const newstepCountGlobal = step_no;
        stepCountGlobal = newstepCountGlobal;
        const key = 'step_' + newstepCountGlobal;
        const currentForm = schoolFormMappings[key];
        this.setState({ stepCount:step_no, schoold_id:id, currentForm  });
      }
		}

    // routerWillLeave(nextLocation) {
    // }

    componentDidMount() {
      //console.log(this.props.location);
      //this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
      if( this.props.location && this.props.location.action && this.props.location.action === "POP") {
          const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
          const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email };
          this.props.getSchoolDetailsDispatch(logoutPayloadHeader);
      } else if ( this.props.location && this.props.location.action && this.props.location.action === "PUSH" ) {
        const formContinueDetails = this.props.location && this.props.location.state && this.props.location.state.formContinueDetails;
        const { schoold_id, step_no=1 } = formContinueDetails;
        stepCountGlobal = step_no;
        const key = 'step_' + step_no;
        const currentForm = schoolFormMappings[key];
        this.setState({ stepCount:step_no, schoold_id, currentForm });
      }
    }

    routeToSchoolPageOnConfirm = () => {
      if( this._currentFormProps.props.form.isFieldsTouched() ) {
      const confirmModal =  Modal.confirm({
          title: 'Form contains usaved data!',
          content: 'Form contains usaved data!The data will be lost on navigation,Do you wish to continue?',
          onOk() {
            browserHistory.push({
              pathname: '/schoolprofile'
            });
            confirmModal.destroy();
            return true;
          },
          onCancel() { return false }
        });
      } else {
        browserHistory.push({
          pathname: '/schoolprofile'
        });
      }
    }

    onClickNextForm = () => {
      const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
      const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }

      var payloadObj = this._currentFormProps.props.form.getFieldsValue();
      payloadObj.step_no = stepCountGlobal+1;
      if( payloadObj.step_no === 8) {
        payloadObj.details_updated = true;
      }
      this._currentFormProps.props.form.validateFields((err, values) => {
        //console.log(payloadObj);
        if(!err) {
          this.props.updateSchoolDetailsDispatch(logoutPayloadHeader, payloadObj, this.state.schoold_id );
          const newstepCountGlobal = stepCountGlobal+1;
          stepCountGlobal = newstepCountGlobal;
          const key = 'step_' + newstepCountGlobal;
          const currentForm = schoolFormMappings[key];
          this.setState({ stepCount: newstepCountGlobal, currentForm: currentForm });
        }
      });
    }

    renderCurrentStepForm() {
      if(this.state.currentForm){
        return (
          <this.state.currentForm wrappedComponentRef={(ref) => this._currentFormProps = ref} />
        )
      }
      else
        return '';
    }

  	render() {

	    return (
	        <Row type="flex" className="candidate-signup-pageContainer">
	        	<Col sm={24}>
							<Row type="flex" justify="space-between">
								<Col>
	        				<h2>School Details Form</h2>
								</Col>
								<Col>
                  <Button onClick={this.routeToSchoolPageOnConfirm}> Visit your school page </Button>
								</Col>
							</Row>
	        	</Col>

	        	<Col sm={24}>
	        		<hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', margin:'10px 0px' }}/>
	        	</Col>
	        	<Col>
	        		<h2>Welcome to Schrole™ Premium</h2>
	        		<p>You have started the process to find a new role in a great school.
 					Please note that you will need pay $75 AUD for a 12 month subscription to a Premium Account
 					for this application. You will then also be able to search and apply for jobs around the world from your own Schrole dashboard.</p>
	        		<p>If you don’t want to proceed please click Cancel to return to our homepage. You can apply to our
	        		featured schools there and can always apply directly through a schools own website for free.</p>
	        		<p>Please have the following ready before you commence to make the job as easy as possible for you.</p>
	        		<p>
	        			<li>CV in Word or PDF.</li>
	        			<li>Recent Passport sized photo in jpg or png image format.</li>
	        			<li>Copy of your teaching registration in PDF (optional).</li>
	        			<li>Referee details including email addresses and other contact details. Your referees will be contacted to provide a confidential reference. You may wish to let them know an email link will be sent to them,
	        			but sometimes this may be sent to the spam folder.</li>
	        			<li>You will also be asked to complete some questions set by the school. This may take some time as you will need to think carefully about your answers.
	        			Please note you can always edit and change details from your
	        			own dashboard once the application is complete so you will be able to make changes to questions from there if you want to complete the initial signup process quickly.</li>
	        		</p>
	        		<p>The process may take some time to complete, however you can log back in at any time to complete this process. Be aware that each section can be saved separately.
	        		To protect your privacy the system will log you out after 60 minutes of inactivity. Please save regularly.</p>
	        		<p>Schrole™ Admin</p>
	        	</Col>
	        	<Col sm={24}>
	        		<hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', margin:'10px 0px'}}/>
	        	</Col>
	        	<Col sm={24}>
              <div>{this.renderCurrentStepForm()}</div>
              <Button onClick={this.onClickNextForm}>{ stepCountGlobal === 8 ? 'Submit' : 'Next' } </Button>
	      		</Col>
	        </Row>
	    );
  	}
}

function mapStateToProps(state) {
  //console.log("mapStateToProps, schoolregi",state);
  const schoolDetails = state.schools && state.schools.schoolProfile
  return { schoolDetails };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSchoolDetailsDispatch, getSchoolDetailsDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(SchoolRegisterBasicPage);
