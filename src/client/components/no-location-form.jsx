'use strict';

const React = require('react');

const NearestStation = require('./nearest-station.jsx');


const NoLocationForm = React.createClass({

  getInitialState() {
    return { locationId: null };
  },

  locationIdChange (event) {
    this.setState({ locationId: event.target.value });
  },

  gotoLocationId (event) {
    event.preventDefault();
    console.log('called');
    window.location.href = `/${this.state.locationId}`;
  },

  render() {

    let userDisplay;
    if (this.props.user.id === 'unknown') {
      userDisplay = <div>
        <p>Hi there!</p>
        <p><a href="/login">Login with Twitter</a></p>
      </div>

    } else {
      userDisplay = <p>Hi <strong>{this.props.user.username}</strong></p>;
    }

    return (
      <div>
        {userDisplay}
        <form>
          <div>
            <NearestStation></NearestStation>
            <label htmlFor="location-id">
              <input type="text" id="location-id" placeholder="Please enter Station or Train Carrage ID" value={this.state.locationId} onChange={this.locationIdChange}/>
            </label>
          </div>
          <div>
            <input type="submit" value="Report to C2C" onClick={this.gotoLocationId} />
          </div>
        </form>
      </div>
    )
  }
});

module.exports = NoLocationForm;
