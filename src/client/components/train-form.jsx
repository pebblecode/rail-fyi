'use strict';

const React = require('react');

const TrainStaffForm = require('./train-staff-form.jsx');
const TrainFacilityForm = require('./train-facilities-form.jsx');
const LocationDetails = require('./location-details.jsx');
const TrainStationSelect = require('./train-station-select.jsx');

const TrainForm = React.createClass({
  displayName: 'TrainForm',

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
      showForm = <TrainStaffForm />
    } else {
      showForm = <TrainFacilityForm />
    }

    return (
      <div className="train-form">
        <TrainStationSelect/>

        <LocationDetails location={this.state.location} />

        <button type="submit" onClick={this.showStaffForm}>Report Staff</button>
        <button type="submit" onClick={this.showFacilityForm}>Report Facilities</button>
        {showForm}
      </div>
    );
  }
});

module.exports = TrainForm;
