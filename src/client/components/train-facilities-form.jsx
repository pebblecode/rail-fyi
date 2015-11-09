'use strict';

const React = require('react');

const TrainFacilitiesForm = React.createClass({
  displayName: 'TrainFacilities',

  getInitialState() {
    return { selectedType: 'cleanliness', sentiment: 'positive'};
  },
  selectedType (t) {
    this.setState({ selectedType: t});
  },
  selectedSentiment (s) {
    this.setState({ sentiment: s });
  },

  doStateSubmit() {
    fetch('/submit-post', {method: 'post', body: JSON.stringify(this.state)})
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
                  className={this.state.selectedType === 'cleanliness' ? 'active' : ''}
                  onClick={this.selectedType.bind(this, 'cleanliness')}>Cleanliness</button>
          <button type="submit"
                  className={this.state.selectedType === 'comfort' ? 'active' : ''}
                  onClick={this.selectedType.bind(this, 'comfort')}>Comfort</button>
          <button type="submit"
                  className={this.state.selectedType === 'damage' ? 'active' : ''}
                  onClick={this.selectedType.bind(this, 'damage')}>Damage</button>
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

module.exports = TrainFacilitiesForm;
