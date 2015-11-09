'use strict';

const React = require('react');

const NoLocationForm = require('./components/no-location-form.jsx');
const StationForm = require('./components/station-form.jsx');
const TrainForm = require('./components/train-form.jsx');

const C2CApp = React.createClass({
  displayName: 'C2CFYIApp',

  getInitialState() {
    return this.props;
  },

  render() {

    let initialForm;

    if(this.state.location.type === 'station') {
      initialForm = <StationForm location={this.state.location} user={this.state.user} />
    } else if (this.state.location.type === 'train') {
      initialForm = <TrainForm location={this.state.location} user={this.state.user} />
    } else {
      initialForm = <NoLocationForm user={this.state.user}/>
    }

    return (
      <div>
        {initialForm}
      </div>
    )
  }

});

module.exports = C2CApp;
