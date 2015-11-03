'use strict';

import React from 'react';
import LocationInformation from 'locationInfo.jsx';

let StationTab = React.createClass({



  render () {
    return (
      <div>
        <h2>Station</h2>
        <LocationInformation location=""></LocationInformation>
      </div>
    )
  }
});
