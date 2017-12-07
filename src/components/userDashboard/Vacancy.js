import React, { Component } from 'react';

import AllVacanciesList from './vacancies/AllVacanciesList';

class Vacancy extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
  }

  render() {
    return (
      <div>
        <AllVacanciesList />
      </div>
    );
  }
}

export default Vacancy;
