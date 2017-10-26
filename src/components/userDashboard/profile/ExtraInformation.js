import React, { Component } from 'react';


class ExtraInformation extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    console.log(this.props);
  }

  render() {
    return (
      <div className="extraInformation-mainContainer">
          <div className="">
            <h1 style={{'textAlign': 'center','color': '#1968a5'}}>
                Connecting international schools with the best qualified teachers. Simply.
            </h1>
            <p style={{'textAlign': 'center','color': '#333333'}}>
              <strong>
                Schrole Connect’s unique software solutions help to attract and match the best qualified teachers with hard to fill roles in international schools.
                Reducing recruitment time and costs.<br />
              </strong>
            </p>
          </div>
      </div>
    );
  }
}

export default ExtraInformation;
