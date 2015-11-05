'use strict';

const React = require('react');

const NoLocationForm = require('./components/no-location-form.jsx');
const StationForm = require('./components/station-form.jsx');
const TrainForm = require('./components/train-form.jsx');

const C2CApp = React.createClass({

  getInitialState() {
    return this.props;
  },

  render() {

    console.log(this.state);

    let initialForm;

    if(this.state.locationDetails.type === 'station') {
      initialForm = <StationForm location={this.state.locationDetails} user={this.state.user} />
    } else if (this.state.locationDetails === 'train') {
      initialForm = <TrainForm location={this.state.locationDetails} user={this.state.user} />
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
