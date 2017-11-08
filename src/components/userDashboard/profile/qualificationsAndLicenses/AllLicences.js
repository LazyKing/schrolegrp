import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form, 
  Input, Icon, DatePicker, Select } from 'antd';
import _ from 'lodash';

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
    const selectedLicence = _.find( this.state.licencesArray, function(licence) { 
      return licence.id == target.id;
    });

    this.setState({
      visible: true,
      selectedLicence: (selectedLicence) ? selectedLicence : {}
    });
  }

  handleOk = () => {
    console.log(this.props.form.getFieldsValue());
    this.props.form.validateFields((err, values) => {
      //console.log(err);
      if(!err) {
        //update new data here
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
          <LicenceForm currentLicence={this.state.selectedLicence}/>
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

export default Form.create()(AllLicences);
