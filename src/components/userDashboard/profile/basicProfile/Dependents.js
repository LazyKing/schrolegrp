import React, { Component } from 'react';
import { Button, Row, Col, Card, Icon } from 'antd';

class Dependents extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    }
  
  render() {
    return (
        <Card title="Dependents" extra={<div><Button>Add Dependent</Button><Button>No</Button></div>}>
          <div>
            <Row type="flex" justify="start">
              <Col><span>Storm White</span></Col>
            </Row>
          </div>
        </Card>
    );
  }
}

export default Dependents;
