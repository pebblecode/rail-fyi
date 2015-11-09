'use strict';

const React = require('react');
const classNames = require('classnames');

const StaffForm = require('./staff-form.jsx');
const FacilityForm = require('./facilities-form.jsx');
const LocationDetails = require('./location-details.jsx');

const LocationForm = React.createClass({
  displayName: 'LocationForm',

  getInitialState () {
    return Object.assign({}, this.props, { interaction: 'staff' });
  },

  showFacilityForm () {
    this.setState({ interaction: 'facility' });
  },

  showStaffForm () {
    this.setState({ interaction: 'staff' });
  },

  render () {

    const showForm = this.state.interaction === 'staff' ?
      <StaffForm location={this.state.location} /> : <FacilityForm location={this.state.location} />;
    const staffButtonClass = `button-primary one-half column ${this.state.interaction === 'staff' ? ' active': ''}`;
    const facilityButtonClass = `button-primary one-half column ${this.state.interaction === 'facility' ? ' active': ''}`;

    return (
      <div className="location-form container">

        <LocationDetails location={this.state.location} />

        <div className="row">
          <button className={staffButtonClass} type="submit" onClick={this.showStaffForm}>Report Staff</button>
          <button className={facilityButtonClass} type="submit" onClick={this.showFacilityForm}>Report Facilities</button>
        </div>

        {showForm}
      </div>
    );
  }
});

module.exports = LocationForm;
