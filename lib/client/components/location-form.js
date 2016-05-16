'use strict';

var React = require('react');
var classNames = require('classnames');

var StaffForm = require('./staff-form.jsx');
var FacilityForm = require('./facilities-form.jsx');
var LocationDetails = require('./location-details.jsx');

var LocationForm = React.createClass({
  displayName: 'LocationForm',

  getInitialState: function getInitialState() {
    return Object.assign({}, this.props, { interaction: 'staff' });
  },
  showFacilityForm: function showFacilityForm() {
    this.setState({ interaction: 'facility' });
  },
  showStaffForm: function showStaffForm() {
    this.setState({ interaction: 'staff' });
  },
  render: function render() {

    var showForm = this.state.interaction === 'staff' ? React.createElement(StaffForm, { location: this.state.location }) : React.createElement(FacilityForm, { location: this.state.location });
    var staffButtonClass = 'button-primary one-half column ' + (this.state.interaction === 'staff' ? ' active' : '');
    var facilityButtonClass = 'button-primary one-half column ' + (this.state.interaction === 'facility' ? ' active' : '');

    return React.createElement(
      'div',
      { className: 'location-form container' },
      React.createElement(LocationDetails, { location: this.state.location }),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'button',
          { className: staffButtonClass, type: 'submit', onClick: this.showStaffForm },
          'Report Staff'
        ),
        React.createElement(
          'button',
          { className: facilityButtonClass, type: 'submit', onClick: this.showFacilityForm },
          'Report Facilities'
        )
      ),
      showForm
    );
  }
});

module.exports = LocationForm;
//# sourceMappingURL=location-form.js.map