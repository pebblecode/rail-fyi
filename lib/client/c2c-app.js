'use strict';

var React = require('react');

var NoLocationForm = require('./components/no-location-form.jsx');
var LocationForm = require('./components/location-form.jsx');
var UserDetails = require('./components/user-details.jsx');

var C2CApp = React.createClass({
  displayName: 'C2CFYIApp',

  getInitialState: function getInitialState() {
    return this.props;
  },
  render: function render() {

    var initialForm = void 0;

    if (this.state.location && this.state.location.type) {
      initialForm = React.createElement(LocationForm, { location: this.state.location, user: this.state.user });
    } else {
      initialForm = React.createElement(NoLocationForm, { user: this.state.user });
    }

    return React.createElement(
      'div',
      null,
      React.createElement(UserDetails, { user: this.state.user }),
      initialForm
    );
  }
});

module.exports = C2CApp;
//# sourceMappingURL=c2c-app.js.map