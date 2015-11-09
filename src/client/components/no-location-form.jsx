'use strict';

const React = require('react');

const NearestStation = require('./nearest-station.jsx');

const NoLocationForm = React.createClass({
  displayName: 'NoLocation',

  getInitialState() {
    return Object.assign({}, { locationId: null }, this.props);
  },

  locationIdChange (event) {
    this.setState({ locationId: event.target.value });
  },

  gotoLocationId (event) {
    event.preventDefault();
    window.location.href = `/${this.state.locationId}`;
  },

  render() {
    return (
      <div className="row">
        <div className="one-half column">
          <NearestStation />
        </div>
        <div className="one-half column">
          <form>
            <div className="row">
              <label htmlFor="location-id">
                <input className="u-full-width" type="text" id="location-id" placeholder="Please enter Station or Train Carrage ID" value={this.state.locationId} onChange={this.locationIdChange}/>
              </label>
            </div>
            <input type="submit" value="Report to C2C" onClick={this.gotoLocationId} className="button-primary" />
          </form>
        </div>
      </div>
    )
  }
});

module.exports = NoLocationForm;
