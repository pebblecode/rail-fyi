'use strict';

import React from 'react';
import LocationInformation from 'locationInfo.jsx';

const TrainTab = React.createClass({
  getInitialState: function () {
    return {
      staff: false,
      facilities: false
    };
  },
  onStaffClick(evt) {
    this.setState({
      staff: true,
      facilities: false
    });

  },
  onFacilitiesClick(evt) {
    this.setState({
      staff: false,
      facilities: true
    });
  },
  render () {


    return (
      <div>
        <h2>Train</h2>
        <LocationInformation location="Carriage 53245"></LocationInformation>

        <img alt="Staff" onClick={this.onStaffClick}/>
        <img alt="Facilities" onClick={this.onFacilitiesClick}/>

        { this.state.staff ? <div>Staff</div> : null }
        { this.state.facilities ? <div>Facilities</div> : null }

      </div>
    );
  }
});

export default TrainTab;
