'use strict';

const React = require('react');

const NoLocationForm = require('./components/no-location-form.jsx');
const LocationForm = require('./components/location-form.jsx');
const UserDetails = require('./components/user-details.jsx');

const C2CApp = React.createClass({
  displayName: 'C2CFYIApp',

  getInitialState() {
    return this.props;
  },

  render() {

    let initialForm;

    if(this.state.location && this.state.location.type) {
      initialForm = <LocationForm location={this.state.location} user={this.state.user} />
    } else {
      initialForm = <NoLocationForm user={this.state.user}/>
    }

    return (
      <div>
        <UserDetails user={this.state.user} />

        {initialForm}
      </div>
    )
  }

});

module.exports = C2CApp;
