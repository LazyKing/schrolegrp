import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

/*import css*/
import '../../App.css';

/*router functionalities*/
import { Link, browserHistory } from 'react-router';

/*Import Redux functionalities*/
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import applicants from "../../reducers";

/*Import Components*/
import Logout from '../Logout';
const { Header, Content, Footer, Sider } = Layout;

const applicantsStore=createStore(applicants, applyMiddleware(thunk)) ;

const masterTabs = {
  'schools' : '2',
  'vacancies' : '3',
  'application' : '4',
  'profile' : '5',
  'search' : '6'
}

class UserProfileDashboard extends Component {
  
  onMenuClick = (e) => {
    this.setState({
      currentTab: e.key,
    });
  }

  constructor(props) {
    super(props);
    this.state = { currentTab: '1', user: '' , authToken: '' };
  }

  componentDidMount() {
    //console.log("UserProfileDashboard",this.props.location);
    var pathnam = this.props.location.pathname;
    const currentMasterTabName = pathnam.replace(/^\/userprofile\//, '');
    const currentMasterTabKey  = masterTabs[currentMasterTabName];
    if( currentMasterTabKey ){
      console.log(currentMasterTabName, currentMasterTabKey)
      this.setState ({ currentTab: currentMasterTabKey});
    }

    if(this.props.location.state) {
      const { email, auth_token} = this.props.location.state.stateData ;
      this.setState({ user: email , authToken: auth_token });
    } else if ( localStorage.getItem("userprofile") ) {
      //console.log(JSON.parse(localStorage.getItem("userprofile")));
      const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
      this.setState({ user: email , authToken: auth_token });
    } else {
      browserHistory.push({
        pathname: '/Login'
      });
    }
  }
/*<Sider collapsible collapsed={true} width={200} style={{ background: '#fff' }}>
  <Menu
    mode="inline"
    defaultSelectedKeys={['11']}
    style={{ height: '100%', borderRight: 0 }}
  >
    <Menu.Item key="11">
      <Icon type="pie-chart" />
      <span>Option 1</span>
    </Menu.Item>
    <Menu.Item key="12">
      <Icon type="desktop" />
      <span>Option 2</span>
    </Menu.Item>
  </Menu>
</Sider>*/
  render() {
    return (
      <Provider store={applicantsStore}>
      <div className="height-fluid">
        <div className="featured-list-container" >
          <Layout className="layout">
            <Header>
              <Menu
                theme="dark"
                onClick={this.onMenuClick}
                mode="horizontal"
                selectedKeys={[this.state.currentTab]}
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1" title="Dashboard"><Icon type="desktop" /><Link role="button" to="/userprofile" style={{'display':'inline-flex'}}>Dashboard</Link></Menu.Item>
                <Menu.Item key="2" title="School"><Icon type="mail" /><Link role="button" to={{ pathname: '/userprofile/schools'/*, state: { stateData: "Anirudh" }*/ }} style={{'display':'inline-flex'}}>School</Link></Menu.Item>
                <Menu.Item key="3" title="Vacancies"><Icon type="user-add" /><Link role="button" to={{ pathname: '/userprofile/vacancies'/*, state: { stateData: "Anirudh" }*/ }} style={{'display':'inline-flex'}}>Vacancies</Link></Menu.Item>
                <Menu.Item key="4" title="Applications"><Icon type="global" /><Link role="button" to={{ pathname: '/userprofile/application'/*, state: { stateData: "Anirudh" }*/ }} style={{'display':'inline-flex'}}>Applications</Link></Menu.Item>
                <Menu.Item key="5" title="Profile"><Icon type="smile-o" /><Link role="button" to={{ pathname: '/userprofile/profile'/*, state: { stateData: "Anirudh" }*/ }} style={{'display':'inline-flex'}}>Profile</Link></Menu.Item>
                <Menu.Item key="6" title="Search"><Icon type="search" /><Link role="button" to={{ pathname: '/userprofile/search'/*, state: { stateData: "Anirudh" }*/ }} style={{'display':'inline-flex'}}>Search</Link></Menu.Item>
                <Menu.SubMenu  title={<span><Icon type="setting" />Options</span>}>
                  <Menu.Item key="7" title={this.state.user}><Icon type="user" />{this.state.user}</Menu.Item>
                  <Menu.Item key="8"><Logout type="menuItem" auth_token={this.state.authToken} user_email={this.state.user}/></Menu.Item>
                </Menu.SubMenu>
              </Menu>
            </Header>
            <Layout> 
              <Content style={{ padding: '0 20px' }}>
                <Breadcrumb separator=">" routes={this.props.routes} params={this.props.params} className="breadCrumb-container" />
                <div style={{ background: '#fff', padding: 15, minHeight: 280 }}>
                  <div>
                    {this.props.children}
                  </div>
                </div>
              </Content>
            </Layout> 
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </div>
      </div>
      </Provider>
    );
  }
}

export default UserProfileDashboard;
