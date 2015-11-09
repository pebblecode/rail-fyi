'use strict';

const React = require('react');

const ShowTweet = React.createClass({
  displayName: 'ShowTweet',

  getInitialState() {
    return Object.assign({}, {tweet: null}, this.props);
  },
  
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <textarea name="tweet" id="tweet" cols="30" rows="10" className="u-full-width" value={this.props.tweet}></textarea>
        </div>
      </div>
    )
  }
});

module.exports = ShowTweet;
