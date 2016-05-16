'use strict';

var React = require('react');

var UserDetails = React.createClass({
  displayName: 'UserDetails',

  getInitialState: function getInitialState() {
    return Object.assign({}, this.props);
  },
  render: function render() {
    var userDisplay = void 0;
    if (this.state.user.id === 'unknown') {
      userDisplay = React.createElement(
        'p',
        null,
        'Hi there! ',
        React.createElement(
          'a',
          { href: '/login' },
          'Login with Twitter'
        )
      );
    } else {
      userDisplay = React.createElement(
        'p',
        null,
        'Hi ',
        React.createElement(
          'strong',
          null,
          this.state.user.username
        )
      );
    }

    return React.createElement(
      'div',
      { className: 'container' },
      userDisplay
    );
  }
});

module.exports = UserDetails;
//# sourceMappingURL=user-details.js.map