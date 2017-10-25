import React, { Component } from 'react';
import { Button, Row, Col, Card } from 'antd';
import '../../../stylesheets/userdashboard.css';
import '../../../App.css';


class SchoolCard extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    console.log(this.props);
  }

  render() {
    return (
      <div style={{ 'padding': '10px 0px' }} >  
        <Card key={this.props.key} title={this.props.title} extra={<a href="#">View All</a>}>
          <div className="school-card-container">
            <div className="school-card-name-container col-sm-12">
              <div>
                <h3>Schrole</h3>
                <h4>{this.props.location}</h4>
              </div>
              <div>
                <p>School Profile</p>
                <p>School Website</p>
              </div>
            </div> 
            <div className="school-card-actions-container">
              <Button>Update Questions</Button>
            </div>
          </div>   
        </Card>
      </div>  
    );
  }
}

export default SchoolCard;
