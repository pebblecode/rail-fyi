'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ReportPage from './../../views/reportpage.jsx';

const App = React.createFactory(ReportPage);
const mountNode = document.getElementById('app-mount');
const serverState = window.C2CFYI;

ReactDOM.render(App(serverState), mountNode);
