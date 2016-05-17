'use strict';

var React = require('react');
var ShowTweet = require('./show-tweet');

var StaffForm = React.createClass({
  displayName: 'StaffForm',

  getInitialState: function getInitialState() {
    return Object.assign({}, { interaction: 'staff', type: 'knowledge', sentiment: 'positive', staffId: null, tweet: null }, this.props);
  },
  selectedType: function selectedType(type) {
    this.setState({ type: type });
  },
  selectedSentiment: function selectedSentiment(sentiment) {
    this.setState({ sentiment: sentiment });
  },
  staffIdChange: function staffIdChange(event) {
    this.setState({ staffId: event.target.value });
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

    var knowledgeButtonClass = 'button-primary one-third column ' + (this.state.type === 'knowledge' ? ' active' : '');
    var behaviourButtonClass = 'button-primary one-third column ' + (this.state.type === 'behaviour' ? ' active' : '');
    var availabilityButtonClass = 'button-primary one-third column ' + (this.state.type === 'availability' ? ' active' : '');

    var positiveButtonClass = 'button-primary one-half column ' + (this.state.sentiment === 'positive' ? ' active' : '');
    var negativeButtonClass = 'button-primary one-half column ' + (this.state.sentiment === 'negative' ? ' active' : '');

    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'staff-id row' },
        React.createElement(
          'label',
          { htmlFor: 'staff-id' },
          'Staff ID or Name'
        ),
        React.createElement('input', { className: 'u-full-width', type: 'text', name: 'staff-id', id: 'staff-id', placeholder: 'Please enter the staff id or name',
          onChange: this.staffIdChange, value: this.state.staffId })
      ),
      React.createElement(
        'div',
        { className: 'type-buttons row' },
        React.createElement(
          'button',
          { type: 'submit',
            className: knowledgeButtonClass,
            onClick: this.selectedType.bind(this, 'knowledge') },
          'Knowledge'
        ),
        React.createElement(
          'button',
          { type: 'submit',
            className: behaviourButtonClass,
            onClick: this.selectedType.bind(this, 'behaviour') },
          'Behaviour'
        ),
        React.createElement(
          'button',
          { type: 'submit',
            className: availabilityButtonClass,
            onClick: this.selectedType.bind(this, 'availability') },
          'Availability'
        )
      ),
      React.createElement(
        'div',
        { className: 'sentiment-buttons row' },
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
        { className: 'button-primary', type: 'submit', onClick: this.doStateSubmit },
        'Submit'
      ),
      React.createElement(ShowTweet, { tweet: this.state.tweet })
    );
  }
});

module.exports = StaffForm;
//# sourceMappingURL=staff-form.js.map