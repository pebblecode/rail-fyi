'use strict';

import React from 'react';

const TrainForm = React.createClass({

  render () {
    return (
      <div className="train-form">
        <button type="submit">Report Staff</button>
        <button type="submit">Report Facilities</button>
      </div>
    );
  }
});

export default TrainForm;
