'use strict';

const React = require('react');

const TrainStationSelect = React.createClass({
  displayName: 'StationSelect',

  selectTrain() {

  },

  selectStation() {

  },

  render () {
    return (
      <div>
        <button type="submit" className="active" onClick={this.selectTrain}>Train</button>
        <button type="submit" onClick={this.selectStation}>Station</button>
      </div>
    )
  }
});

module.exports = TrainStationSelect;
