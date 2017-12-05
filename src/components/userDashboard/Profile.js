import React, { Component } from 'react';
import { Row } from 'antd';
import { NavItem, Nav } from 'react-bootstrap';
import '../../App.css';

/* Import components */
import BasicProfile from './profile/BasicProfile';
import QualificationsAndLicenses from './profile/QualificationsAndLicenses';
import Experience from './profile/Experience';
import ExtraInformation from './profile/ExtraInformation';
import References from './profile/References';

const profileTabComponents = {
  'profileDetails' : BasicProfile,
  'qualifications' : QualificationsAndLicenses,
  'experience' : Experience,
  'extraInfo' : ExtraInformation,
  'referees' : References
}

class Profile extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = { activeProfileTab: 'profileDetails', activeProfileDetailsTab: profileTabComponents['profileDetails']};
  }

  handleProfileTabSelect(selectedKey) {
    const activeProfileDetailsTab = profileTabComponents[selectedKey];
    this.setState({ activeProfileTab:selectedKey, activeProfileDetailsTab:activeProfileDetailsTab });
  }

  renderActiveTab(){
    if ( this.state.activeProfileDetailsTab )
      return ( <this.state.activeProfileDetailsTab /> );
  }

  render() {
    return (
      <div className="">
        <h1 style={{'textAlign': 'left','color': '#1968a5', padding: '10px'}}>
          Your Profile
        </h1>
        <div className="" style={{ background: '#ECECEC', padding: '30px' }} >
          <Row gutter={16} style={{ 'marginTop':'10px' }}>
            <Nav bsStyle="tabs" justified activeKey={this.state.activeProfileTab} onSelect={this.handleProfileTabSelect.bind(this)}>
              <NavItem eventKey={'profileDetails'} title="Item">Personal Details</NavItem>
              <NavItem eventKey={'qualifications'} title="Item">Qualifications/Licences</NavItem>
              <NavItem eventKey={'experience'} title="Item">Experience</NavItem>
              <NavItem eventKey={'extraInfo'} title="Item">Extra Info & Documents</NavItem>
              <NavItem eventKey={'referees'} title="Item">Referees</NavItem>
            </Nav>
          </Row>
          <Row>
            {this.renderActiveTab()}
          </Row>
        </div>
      </div>
    );
  }
}

export default Profile;
