import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';

let LocationInformation = React.createClass({
  getInitialState () {
    return {
      dateTime: this.props.dateTime || new Date(),
      location: this.props.location || "Liverpool St Station, Platform #2"
    }
  },
  render () {
    let currentDate = moment(this.state.dateTime).format('DD/MM/YYYY');
    let currentTime = moment(this.state.dateTime).format('HH:mm');
    return (
      <div className="location-information">
        <h3>Location: {this.state.location}</h3>
        <h4>Date: {currentDate}</h4>
        <h4>Time: {currentTime}</h4>
      </div>
    )
  }
});

//ReactDOM.render(<LocationInformation location="Kings Cross Platform 9 & 3/4"></LocationInformation>, document.getElementById('social-login-attach'));


ReactDOM.render(
    <Tabs>
      <TabList>
        <Tab>Station</Tab>
        <Tab>Train</Tab>
      </TabList>
      <TabPanel>
        <h2>Hello from Foo</h2>
        <LocationInformation location="Carriage 53245"></LocationInformation>
      </TabPanel>
      <TabPanel>
        <h2>Hello from Bar</h2>
        <LocationInformation location="Kings Cross Platform 9 & 3/4"></LocationInformation>
      </TabPanel>

    </Tabs>,
    document.getElementById('social-login-attach')
);


//let SocialLoginButton = React.createClass({
//  render () {
//    return (
//      <div className="social-login">
//        <button>{this.props.children}</button>
//      </div>
//    )
//  }
//});
//
//let SocialLogin = React.createClass({
//  render () {
//    return (
//      <div className="social-login-box">
//        <SocialLoginButton>Twitter</SocialLoginButton>
//        <SocialLoginButton>Facebook</SocialLoginButton>
//      </div>
//    )
//  }
//});
//
//ReactDOM.render(<SocialLogin></SocialLogin>, document.getElementById('social-login-attach'));
