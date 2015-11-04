'use strict';

import React from 'react';
import moment from 'moment';

const LocationDetails = React.createClass({
  getInitialState () {
    return {
      dateTime: new Date()
    }
  },

  render () {

    let currentDate = moment(this.state.dateTime).format('DD/MM/YYYY');
    let currentTime = moment(this.state.dateTime).format('HH:mm');

    const id = `${this.props.type}-${this.props.code.toLowerCase()}`;

    return (
      <div className="location-details" id={id}>
        <div>
          <h2>{this.props.name}</h2>
          <h4>Date: {currentDate}</h4>
          <h4>Time: {currentTime}</h4>
        </div>

        {this.props.children}
      </div>
    )
  }
});

export default LocationDetails;
