'use strict';

var React = require('react');
var StationList = require('../lib/station-list');

function distance(lat1, lon1, lat2, lon2) {
  // See http://stackoverflow.com/a/21623206/1575281
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

var NearestStation = React.createClass({
  displayName: 'NearestStation',

  getInitialState: function getInitialState() {
    var _this = this;

    var navigator = global.navigator;
    if (navigator && navigator.geolocation) {
      (function () {
        var self = _this;
        navigator.geolocation.getCurrentPosition(function (pos) {
          var distances = StationList.map(function (station) {
            return distance(pos.coords.latitude, pos.coords.longitude, station.latitude, station.longitude);
          });
          var minValue = Infinity;
          var minIndex = 0;
          for (var i = 0; i < distances.length; i++) {
            if (minValue > distances[i]) {
              minIndex = i;
              minValue = distances[i];
            }
          }
          self.setState({
            nearestCode: StationList[minIndex].crsCode,
            nearestName: StationList[minIndex].name,
            distance: Math.round(distances[minIndex]) });
        });
      })();
    }
    return {};
  },
  render: function render() {
    var nearest = React.createElement(
      'p',
      null,
      'Nearest station: ',
      React.createElement(
        'a',
        { href: this.state.nearestCode },
        this.state.nearestName
      ),
      ' ',
      this.state.distance,
      ' km'
    );
    return React.createElement(
      'div',
      null,
      this.state.nearestCode ? nearest : 'Finding nearest station...'
    );
  }
});

module.exports = NearestStation;
//# sourceMappingURL=nearest-station.js.map