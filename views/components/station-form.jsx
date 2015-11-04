'use strict';

import React from 'react';

import StationStaffForm from './station-staff-form.jsx';

const StationForm = React.createClass({
  getInitialState () {
    return { currentForm: 'staff' };
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
      showForm = <StationStaffForm />
    } else {
      showForm =
        <div className="facility-form">
          <ul>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ul>
        </div>
    }

    return (
      <div className="station-form">
        <button type="submit" onClick={this.showStaffForm}>Report Staff</button>
        <button type="submit" onClick={this.showFacilityForm}>Report Facilities</button>
        {showForm}
      </div>
    );
  }
});

export default StationForm;
