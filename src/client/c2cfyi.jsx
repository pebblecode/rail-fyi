'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import C2CApp from './../../views/c2c-app.jsx';

const App = React.createFactory(C2CApp);
const mountNode = document.getElementById('app-mount');
const serverState = window.C2CFYI;

ReactDOM.render(App(serverState), mountNode);
