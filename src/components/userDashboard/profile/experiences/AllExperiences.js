import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form, 
  Input, Icon, DatePicker, Select } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createNewExperienceDispatch, updateExperienceDispatch } from "../../../../actions";


/*import components*/
import ExperienceCard from './ExperienceCard';
import ExperienceForm from './ExperienceForm';

const FormItem = Form.Item;
const Option = Select.Option;
moment.locale('en');

class AllExperiences extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    //console.log(this.props);
    this.state = {
      visible: false,
      editMode: false,
      confirmLoading: false,
      experiencesArray:[],
      selectedExperience:{}
    }
  }
  
  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps AllQualifications", nextProps)
    this.setState({experiencesArray:nextProps.experiencesArray})
  }
  
  showModal = (props) => {
    const { target } = props;
    if( target.className.indexOf('edit_experience') !== -1 ) {
      const selectedExperience = _.find( this.state.experiencesArray, function(experiences) { 
        return experiences.id == target.id;
      });
      this.setState({
        visible: true,
        editMode: true,
        selectedExperience: (selectedExperience) ? selectedExperience : {}
      });
    } else {
      this.setState({
        visible: true, 
        editMode: false
      });
    }
  }

  handleOk = () => {
    //console.log(this._expirenceFormProps.getFieldsValue());
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }

    var payloadObj = this._expirenceFormProps.getFieldsValue();
    payloadObj.from = this._expirenceFormProps.getFieldsValue().from._i;
    payloadObj.to = this._expirenceFormProps.getFieldsValue().to._i;

    this.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        if(this.state.editMode){
          this.props.updateExperienceDispatch(logoutPayloadHeader, payloadObj, this.state.selectedExperience.id );
        }
        else{
          this.props.createNewExperienceDispatch(logoutPayloadHeader, payloadObj);
        }

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
    const listItems = this.state.experiencesArray.map((experience) =>
          <ExperienceCard key={experience.id} experience={experience} onclick={this.showModal}/> );

    return (
      <div className="qualification-mainContainer">
          <Modal title="Edit Experience"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
            okText={'Save'}
            cancelText={'cancel'}
            width={'70%'}
          >
            <ExperienceForm currentExperience={this.state.selectedExperience}
            ref={(ref) => this._expirenceFormProps = ref} />
          </Modal>
        
          <Row type="flex" justify="center" style={{'marginTop':'10px'}}>
            <Col sm={22}>
              <Row type="flex" justify="space-between">
                <Col><h3>Experiences</h3></Col>
                <Col><Button className="add_experience" onClick={this.showModal}>Add another Experience</Button></Col>
              </Row>
              <Col>
                <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid', 'marginTop': 10 }}/>
              </Col>
              <Row gutter={16}>
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
  return { experiencesArray:  state.applicants.experiences };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewExperienceDispatch: createNewExperienceDispatch, 
  updateExperienceDispatch:updateExperienceDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(AllExperiences));
