'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var C2CApp = require('./c2c-app');

var App = React.createFactory(C2CApp);
var mountNode = document.getElementById('app-mount');
var serverState = window.C2CFYI;

ReactDOM.render(App(serverState), mountNode);
//# sourceMappingURL=index.js.map