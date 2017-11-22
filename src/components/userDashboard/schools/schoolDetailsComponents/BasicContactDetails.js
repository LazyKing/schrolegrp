import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import { Well } from 'react-bootstrap';

/*Import Redux functionalities*/
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

class BasicContactDetails extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      showDescription: false,
      contact_details:{
        phone:'9999',
        fax:'9999',
        skype:'anirudh'
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps emergency", nextProps)
    //this.setState({contact_details:nextProps.contact_details})
  }

  render() {

    return (
        <Well>
          <div>
             <Row type="flex" justify="space-between">
              <Col><span><strong>Phone Number</strong></span></Col>
              <Col><span>{this.state.contact_details.phone}</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Skype Address</strong></span></Col>
              <Col><span>{this.state.contact_details.skype}</span></Col>
            </Row>
            <Row type="flex" justify="start">
              <Col><span><Icon type="mail" style={{'paddingRight':3}} />{this.state.contact_details.fax}</span></Col>
            </Row>
          </div>
        </Well>
    );
  }
}

// function mapStateToProps(state) {
//   //console.log("mapStateToProps-qalifications",state);
//   return { contactDetails: state.applicants.applicantsProfile.contact_details};
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ updateApplicantsContactDetailsDispatch }, dispatch);
// }


//export default connect( mapStateToProps, mapDispatchToProps)(ContactDetails);
export default BasicContactDetails;
