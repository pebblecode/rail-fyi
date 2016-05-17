'use strict';

var React = require('react');

var ShowTweet = React.createClass({
  displayName: 'ShowTweet',

  getInitialState: function getInitialState() {
    return Object.assign({}, { tweet: null }, this.props);
  },
  render: function render() {
    console.log(this.props);
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement('textarea', { name: 'tweet', id: 'tweet', cols: '30', rows: '10', className: 'u-full-width', value: this.props.tweet })
      )
    );
  }
});

module.exports = ShowTweet;
//# sourceMappingURL=show-tweet.js.map