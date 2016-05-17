'use strict';

var React = require('react');
var moment = require('moment');

var LocationDetails = React.createClass({
  displayName: 'LocationDetails',

  getInitialState: function getInitialState() {
    return Object.assign({}, this.props, { dateTime: new Date() });
  },
  render: function render() {
    var currentDate = moment(this.state.dateTime).format('DD/MM/YYYY');
    var currentTime = moment(this.state.dateTime).format('HH:mm');

    var id = this.state.location.type + '-' + this.state.location.code.toLowerCase();

    return React.createElement(
      'div',
      { className: 'location-details row', id: id },
      React.createElement(
        'div',
        { className: 'one-half column' },
        React.createElement(
          'h4',
          null,
          this.state.location.name
        )
      ),
      React.createElement(
        'div',
        { className: 'one-half column' },
        React.createElement(
          'h4',
          null,
          'Date: ',
          currentDate
        ),
        React.createElement(
          'h4',
          null,
          'Time: ',
          currentTime
        )
      )
    );
  }
});

module.exports = LocationDetails;
//# sourceMappingURL=location-details.js.map