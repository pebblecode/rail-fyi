'use strict';

import React from 'react';
import LocationDetails from './components/location-details.jsx';

import StationForm from './components/station-form.jsx';
import TrainForm from './components/train-form.jsx';

const ReportPage = React.createClass({

  render () {

    let FeedbackForm;
    if (this.props.type === 'station') {
      FeedbackForm = <StationForm code={this.props.code} name={this.props.name} />
    } else {
      FeedbackForm = <TrainForm code={this.props.code} name={this.props.name} />
    }

    return (
      <LocationDetails type={this.props.type} code={this.props.code} name={this.props.name}>
        {FeedbackForm}
      </LocationDetails>
    );
  }
});

export default ReportPage;
