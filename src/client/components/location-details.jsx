'use strict';

const React = require('react');
const moment = require('moment');

const LocationDetails = React.createClass({
  displayName: 'LocationDetails',

  getInitialState () {
    return Object.assign({}, this.props, { dateTime: new Date () });
  },

  render () {
    let currentDate = moment(this.state.dateTime).format('DD/MM/YYYY');
    let currentTime = moment(this.state.dateTime).format('HH:mm');

    const id = `${this.state.location.type}-${this.state.location.code.toLowerCase()}`;

    return (
      <div className="location-details row" id={id}>
        <div className="one-half column">
          <h4>{this.state.location.name}</h4>
        </div>
        <div className="one-half column">
          <h4>Date: {currentDate}</h4>
          <h4>Time: {currentTime}</h4>
        </div>
      </div>
    )
  }
});

module.exports = LocationDetails;
