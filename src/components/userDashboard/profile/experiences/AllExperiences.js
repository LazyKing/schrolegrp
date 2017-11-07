import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form, 
  Input, Icon, DatePicker, Select } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';

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
      ModalText: 'Content of the modal',
      visible: false,
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
    const selectedExperience = _.find( this.state.experiencesArray, function(experiences) { 
      return experiences.id == target.id;
    });

    this.setState({
      visible: true,
      selectedExperience: (selectedExperience) ? selectedExperience : {}
    });
  }

  handleOk = () => {
    console.log(this.props.form.getFieldsValue());
    this.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        //update new data here
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
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
            <ExperienceForm currentExperience={this.state.selectedExperience}/>
          </Modal>
        
          <Row type="flex" justify="center" style={{'marginTop':'10px'}}>
            <Col sm={22}>
              <Row type="flex" justify="space-between">
                <Col><h3>Experiences</h3></Col>
                <Col><Button onClick={this.showModal}>Add another Experience</Button></Col>
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

export default Form.create()(AllExperiences);
