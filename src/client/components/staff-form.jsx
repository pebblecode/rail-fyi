'use strict';

const React = require('react');

const StaffForm = React.createClass({
  displayName: 'StaffForm',

  getInitialState() {
    return { selectedType: 'knowledge', sentiment: 'positive', staffId: null};
  },
  selectedType (t) {
    this.setState({ selectedType: t});
  },
  selectedSentiment (s) {
    this.setState({ sentiment: s });
  },
  staffIdChange(event) {
    this.setState({ staffId: event.target.value });
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
        <div className="staff-id">
          <label htmlFor="staff-id">Staff ID or Name</label>
          <input type="text" name="staff-id" id="staff-id" placeholder="Please enter the staff id or name"
          onChange={this.staffIdChange} value={this.state.staffId}/>
        </div>

        <div className="type-buttons">
          <button type="submit"
                  className={this.state.selectedType === 'knowledge' ? 'active' : ''}
                  onClick={this.selectedType.bind(this, 'knowledge')}>Knowledge</button>
          <button type="submit"
                  className={this.state.selectedType === 'behaviour' ? 'active' : ''}
                  onClick={this.selectedType.bind(this, 'behaviour')}>Behaviour</button>
          <button type="submit"
                  className={this.state.selectedType === 'availability' ? 'active' : ''}
                  onClick={this.selectedType.bind(this, 'availability')}>Availability</button>
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

module.exports = StaffForm;
