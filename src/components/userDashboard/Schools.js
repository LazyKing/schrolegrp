import React, { Component } from 'react';
//import SchoolCard from './schools/SchoolCard';

class Schools extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Schools;
