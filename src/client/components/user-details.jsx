'use strict';

const React = require('react');

const UserDetails = React.createClass({
  displayName: 'UserDetails',

  getInitialState() {
    return Object.assign({}, this.props);
  },

  render() {
    let userDisplay;
    if (this.state.user.id === 'unknown') {
      userDisplay = <p>Hi there! <a href="/login">Login with Twitter</a></p>;
    } else {
      userDisplay = <p>Hi <strong>{this.state.user.username}</strong></p>;
    }

    return (
      <div className="container">
        {userDisplay}
      </div>
    )
  }
});

module.exports = UserDetails;
