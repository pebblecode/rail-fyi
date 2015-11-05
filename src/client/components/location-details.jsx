'use strict';

const React = require('react');
const moment = require('moment');

const LocationDetails = React.createClass({
  getInitialState () {
    return Object.assign({}, this.props, { dateTime: new Date () });
  },

  render () {
    let currentDate = moment(this.state.dateTime).format('DD/MM/YYYY');
    let currentTime = moment(this.state.dateTime).format('HH:mm');

    const id = `${this.state.location.type}-${this.state.location.code.toLowerCase()}`;

    return (
      <div className="location-details" id={id}>
        <div>
          <h2>{this.state.location.name}</h2>
          <h4>Date: {currentDate}</h4>
          <h4>Time: {currentTime}</h4>
        </div>

        {this.props.children}
      </div>
    )
  }
});

module.exports = LocationDetails;
