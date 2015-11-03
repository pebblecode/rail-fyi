'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'

import FyiReportTabs from './fyi-report-tabs.jsx';
import FyiStationTab from './fyi-station-tab.jsx';
import FyiTrainTab from './fyi-train-tab.jsx';

ReactDOM.render(
  (
    <Router>
      <Route path="/" component={FyiReportTabs}>
        <Route path="station/:stationId" component={FyiStationTab} />
        <Route path="train/:carriageId" component={FyiTrainTab} />
      </Route>
    </Router>
  ),
  document.getElementById('app-attach')
);

