'use strict';

var React = require('react');

var NearestStation = require('./nearest-station');

var NoLocationForm = React.createClass({
  displayName: 'NoLocation',

  getInitialState: function getInitialState() {
    return Object.assign({}, { locationId: null }, this.props);
  },
  locationIdChange: function locationIdChange(event) {
    this.setState({ locationId: event.target.value });
  },
  gotoLocationId: function gotoLocationId(event) {
    event.preventDefault();
    window.location.href = '/' + this.state.locationId;
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'one-half column' },
        React.createElement(NearestStation, null)
      ),
      React.createElement(
        'div',
        { className: 'one-half column' },
        React.createElement(
          'form',
          null,
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'label',
              { htmlFor: 'location-id' },
              React.createElement('input', { className: 'u-full-width', type: 'text', id: 'location-id', placeholder: 'Please enter Station or Train Carrage ID', value: this.state.locationId, onChange: this.locationIdChange })
            )
          ),
          React.createElement('input', { type: 'submit', value: 'Report to C2C', onClick: this.gotoLocationId, className: 'button-primary' })
        )
      )
    );
  }
});

module.exports = NoLocationForm;
//# sourceMappingURL=no-location-form.js.map