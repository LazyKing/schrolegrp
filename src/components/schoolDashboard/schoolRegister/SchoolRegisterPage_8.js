import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

/*Redux imports*/
// import { connect } from "react-redux";
// import { registerApplicantDispatch, resetStore } from "../../../actions/Register_Actions";
// import { bindActionCreators } from "redux";

class SchoolRegisterPage_8 extends Component {

		constructor(props) {
    	super(props);

	    this.state = {
	    };
  	}


  	render() {

	    return (
	        <Row type="flex" className="candidate-signup-pageContainer">
	        	<Col>
	        		<h3>Review and Submit Data</h3>
              <p>Notes for ISS:</p>
              <p><strong>IMPORTANT!</strong></p>
	        		<p>Do not submit unless you agree with the following information regarding the FINAL SUBMISSION of your data.</p>
              <p>By submitting your schools data, you acknowledge that:</p>
	        		<p style={{'listStyleType':'lower-alpha'}}>
	        			<li>you are authorized to or have received consent to provide ISS this information on behalf of your school.</li>
	        			<li>all information submitted by you is correct to the best of your knowledge</li>
	        			<li>you acknowledge that the information provided by you is generally available to the public and is not considered to be "sensitive" or “private” information and</li>
                <li>you are authorized to or have received consent to give ISS permission to make this information available for public use and distribution; principally for the distribution of its annual directory, but may also be provided to affiliated and unaffiliated third parties or other members of the general public.</li>
	        		</p>
	        		<p>Please review your application below and print for your records.</p>
	        	</Col>
	        </Row>
	    );
  	}
}

export default SchoolRegisterPage_8;
