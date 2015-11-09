'use strict';

const React = require('react');
const ShowTweet = require('./show-tweet.jsx');

const StaffForm = React.createClass({
  displayName: 'StaffForm',

  getInitialState() {
    return Object.assign({}, { interaction: 'staff', type: 'knowledge', sentiment: 'positive', staffId: null, tweet: null}, this.props);
  },
  selectedType (type) {
    this.setState({ type: type});
  },
  selectedSentiment (sentiment) {
    this.setState({ sentiment: sentiment });
  },
  staffIdChange(event) {
    this.setState({ staffId: event.target.value });
  },

  doStateSubmit() {

    let queryParams = Object.assign({}, this.state);
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

    const knowledgeButtonClass = `button-primary one-third column ${this.state.type === 'knowledge' ? ' active': ''}`;
    const behaviourButtonClass = `button-primary one-third column ${this.state.type === 'behaviour' ? ' active': ''}`;
    const availabilityButtonClass = `button-primary one-third column ${this.state.type === 'availability' ? ' active': ''}`;

    const positiveButtonClass = `button-primary one-half column ${this.state.sentiment === 'positive' ? ' active': ''}`;
    const negativeButtonClass = `button-primary one-half column ${this.state.sentiment === 'negative' ? ' active': ''}`;

    return (
      <div className="container">
        <div className="staff-id row">
          <label htmlFor="staff-id">Staff ID or Name</label>
          <input className="u-full-width" type="text" name="staff-id" id="staff-id" placeholder="Please enter the staff id or name"
          onChange={this.staffIdChange} value={this.state.staffId}/>
        </div>

        <div className="type-buttons row">
          <button type="submit"
                  className={knowledgeButtonClass}
                  onClick={this.selectedType.bind(this, 'knowledge')}>Knowledge</button>
          <button type="submit"
                  className={behaviourButtonClass}
                  onClick={this.selectedType.bind(this, 'behaviour')}>Behaviour</button>
          <button type="submit"
                  className={availabilityButtonClass}
                  onClick={this.selectedType.bind(this, 'availability')}>Availability</button>
        </div>

        <div className="sentiment-buttons row">
          <button type="submit"
                  className={positiveButtonClass}
                  onClick={this.selectedSentiment.bind(this, 'positive')}>Positive</button>
          <button type="submit"
                  className={negativeButtonClass}
                  onClick={this.selectedSentiment.bind(this, 'negative')}>Negative</button>
        </div>

        <button className="button-primary" type="submit" onClick={this.doStateSubmit}>Submit</button>

        <ShowTweet tweet={this.state.tweet} />
      </div>
    )
  }
});

module.exports = StaffForm;
