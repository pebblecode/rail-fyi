'use strict';

const React = require('react');

const StationFacilitiesForm = React.createClass({
  displayName: 'StationFacilities',

  getInitialState() {
    return { location: 'station', interaction: 'facilities', type: 'cleanliness', sentiment: 'positive'};
  },
  selectedType (t) {
    this.setState({ type: t});
  },
  selectedSentiment (s) {
    this.setState({ type: s });
  },

  doStateSubmit() {
    fetch('/get-tweet', {method: 'post', body: JSON.stringify(this.state)})
    .then(response => {
      return response.json();
    }).then(body => {
      console.log(body);
    }).catch(error => {
      console.log(error);
    })
  },

  render () {
    return (
      <div>
        <div className="type-buttons">
          <button type="submit"
                  className={this.state.type === 'cleanliness' ? 'active' : ''}
                  onClick={this.type.bind(this, 'cleanliness')}>Cleanliness</button>
          <button type="submit"
                  className={this.state.type === 'comfort' ? 'active' : ''}
                  onClick={this.type.bind(this, 'comfort')}>Comfort</button>
          <button type="submit"
                  className={this.state.type === 'damage' ? 'active' : ''}
                  onClick={this.type.bind(this, 'damage')}>Damage</button>
        </div>

        <div className="sentiment-buttons">
          <button type="submit"
                  className={this.state.sentiment === 'positive' ? 'active': ''}
                  onClick={this.selectedSentiment.bind(this, 'positive')}>Positive</button>
          <button type="submit"
                  className={this.state.sentiment === 'negative' ? 'active': ''}
                  onClick={this.selectedSentiment.bind(this, 'negative')}>Negative</button>
        </div>

        <button type="submit" onClick={this.doStateSubmit}>Submit</button>
      </div>
    )
  }
});

module.exports = StationFacilitiesForm;
