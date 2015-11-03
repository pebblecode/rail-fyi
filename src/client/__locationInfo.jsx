'use strict';

import React from 'react';
import moment from 'moment';

const LocationInformation = React.createClass({
  getInitialState () {
    return {
      dateTime: this.props.dateTime || new Date(),
      location: this.props.location || 'Unknown Location'
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

export default LocationInformation;
