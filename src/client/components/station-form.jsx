'use strict';

const React = require('react');

const StaffForm = require('./station-staff-form.jsx');
const StationFacilityForm = require('./station-facilities-form.jsx');
const LocationDetails = require('./location-details.jsx');
const TrainStationSelect = require('./train-station-select.jsx');

const StationForm = React.createClass({
  displayName: 'Station',

  getInitialState () {
    return Object.assign({}, this.props, { currentForm: 'staff' });
  },

  showFacilityForm (event) {
    this.setState({ currentForm: 'facility' });
  },

  showStaffForm (event) {
    this.setState({ currentForm: 'staff' });
  },

  render () {

    let showForm;
    if (this.state.currentForm === 'staff') {
      showForm = <StaffForm />
    } else {
      showForm = <StationFacilityForm />
    }

    return (
      <div className="station-form">

        <TrainStationSelect/>

        <LocationDetails location={this.state.location} />

        <button type="submit" onClick={this.showStaffForm}>Report Staff</button>
        <button type="submit" onClick={this.showFacilityForm}>Report Facilities</button>
        {showForm}
      </div>
    );
  }
});

module.exports = StationForm;
