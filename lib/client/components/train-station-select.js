'use strict';

var React = require('react');

var TrainStationSelect = React.createClass({
  displayName: 'StationSelect',

  selectTrain: function selectTrain() {},
  selectStation: function selectStation() {},
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { type: 'submit', className: 'active', onClick: this.selectTrain },
        'Train'
      ),
      React.createElement(
        'button',
        { type: 'submit', onClick: this.selectStation },
        'Station'
      )
    );
  }
});

module.exports = TrainStationSelect;
//# sourceMappingURL=train-station-select.js.map