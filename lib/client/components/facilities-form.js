'use strict';

var React = require('react');
var ShowTweet = require('./show-tweet.jsx');

var FacilitiesForm = React.createClass({
  displayName: 'FacilitiesForm',

  getInitialState: function getInitialState() {
    return Object.assign({}, { interaction: 'facilities', type: 'cleanliness', sentiment: 'positive', tweet: null }, this.props);
  },
  selectedType: function selectedType(type) {
    this.setState({ type: type });
  },
  selectedSentiment: function selectedSentiment(sentiment) {
    this.setState({ sentiment: sentiment });
  },
  doStateSubmit: function doStateSubmit() {
    var _this = this;

    var queryParams = Object.assign({}, this.state);
    queryParams.location = queryParams.location.type;

    fetch('/get-tweet', {
      method: 'post',
      body: JSON.stringify(queryParams),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (body) {
      console.log(body);
      _this.setState(body);
    }).catch(function (error) {
      console.log(error);
    });
  },
  render: function render() {

    var cleanlinessButtonClass = 'button-primary one-third column ' + (this.state.type === 'cleanliness' ? ' active' : '');
    var comfortButtonClass = 'button-primary one-third column ' + (this.state.type === 'comfort' ? ' active' : '');
    var damageButtonClass = 'button-primary one-third column ' + (this.state.type === 'damage' ? ' active' : '');

    var positiveButtonClass = 'button-primary one-half column ' + (this.state.sentiment === 'positive' ? ' active' : '');
    var negativeButtonClass = 'button-primary one-half column ' + (this.state.sentiment === 'negative' ? ' active' : '');

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'type-buttons' },
        React.createElement(
          'button',
          { type: 'submit',
            className: cleanlinessButtonClass,
            onClick: this.selectedType.bind(this, 'cleanliness') },
          'Cleanliness'
        ),
        React.createElement(
          'button',
          { type: 'submit',
            className: comfortButtonClass,
            onClick: this.selectedType.bind(this, 'comfort') },
          'Comfort'
        ),
        React.createElement(
          'button',
          { type: 'submit',
            className: damageButtonClass,
            onClick: this.selectedType.bind(this, 'damage') },
          'Damage'
        )
      ),
      React.createElement(
        'div',
        { className: 'sentiment-buttons' },
        React.createElement(
          'button',
          { type: 'submit',
            className: positiveButtonClass,
            onClick: this.selectedSentiment.bind(this, 'positive') },
          'Positive'
        ),
        React.createElement(
          'button',
          { type: 'submit',
            className: negativeButtonClass,
            onClick: this.selectedSentiment.bind(this, 'negative') },
          'Negative'
        )
      ),
      React.createElement(
        'button',
        { type: 'submit', onClick: this.doStateSubmit },
        'Submit'
      ),
      React.createElement(ShowTweet, { tweet: this.state.tweet })
    );
  }
});

module.exports = FacilitiesForm;
//# sourceMappingURL=facilities-form.js.map