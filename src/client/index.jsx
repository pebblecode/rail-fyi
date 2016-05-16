'use strict';

const React = require('react');
const ReactDOM  = require('react-dom');

const C2CApp = require('./c2c-app.jsx');

const App = React.createFactory(C2CApp);
const mountNode = document.getElementById('app-mount');
const serverState = window.C2CFYI;

ReactDOM.render(App(serverState), mountNode);