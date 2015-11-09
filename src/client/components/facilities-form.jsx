'use strict';

const React = require('react');
const ShowTweet = require('./show-tweet.jsx');

const FacilitiesForm = React.createClass({
  displayName: 'FacilitiesForm',

  getInitialState() {
    return Object.assign({}, { interaction: 'facilities', type: 'cleanliness', sentiment: 'positive', tweet: null}, this.props);
  },
  selectedType (type) {
    this.setState({ type: type});
  },
  selectedSentiment (sentiment) {
    this.setState({ sentiment: sentiment });
  },

  doStateSubmit() {

    let queryParams = this.state;
    queryParams.location = queryParams.location.type;

    fetch('/get-tweet', {
      method: 'post',
      body: JSON.stringify(queryParams),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    }).then((body) => {
      console.log(body);
      this.setState(body);
    }).catch((error) => {
      console.log(error);
    });
  },

  render () {

    const cleanlinessButtonClass = `button-primary one-third column ${this.state.type === 'cleanliness' ? ' active': ''}`;
    const comfortButtonClass = `button-primary one-third column ${this.state.type === 'comfort' ? ' active': ''}`;
    const damageButtonClass = `button-primary one-third column ${this.state.type === 'damage' ? ' active': ''}`;

    const positiveButtonClass = `button-primary one-half column ${this.state.sentiment === 'positive' ? ' active': ''}`;
    const negativeButtonClass = `button-primary one-half column ${this.state.sentiment === 'negative' ? ' active': ''}`;

    return (
      <div>
        <div className="type-buttons">
          <button type="submit"
                  className={cleanlinessButtonClass}
                  onClick={this.selectedType.bind(this, 'cleanliness')}>Cleanliness</button>
          <button type="submit"
                  className={comfortButtonClass}
                  onClick={this.selectedType.bind(this, 'comfort')}>Comfort</button>
          <button type="submit"
                  className={damageButtonClass}
                  onClick={this.selectedType.bind(this, 'damage')}>Damage</button>
        </div>

        <div className="sentiment-buttons">
          <button type="submit"
                  className={positiveButtonClass}
                  onClick={this.selectedSentiment.bind(this, 'positive')}>Positive</button>
          <button type="submit"
                  className={negativeButtonClass}
                  onClick={this.selectedSentiment.bind(this, 'negative')}>Negative</button>
        </div>

        <button type="submit" onClick={this.doStateSubmit}>Submit</button>

        <ShowTweet tweet={this.state.tweet} />

      </div>
    )
  }
});

module.exports = FacilitiesForm;
