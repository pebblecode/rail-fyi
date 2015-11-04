'use strict';

import React from 'react';

const StationStaffForm = React.createClass({
  getInitialState() {
    return { selectedType: 'knowledge', sentiment: 'positive', staffId: null};
  },

  selectedKnowledge () {
    this.setState({ selectedType: 'knowledge'});
  },

  selectedBehaviour () {
    this.setState({ selectedType: 'behaviour'});
  },

  selectedAvailability () {
    this.setState({ selectedType: 'availability'});
  },

  selectedPositive () {
    this.setState({ sentiment: 'positive' });
  },

  selectedNegative () {
    this.setState({ sentiment: 'negative' });
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
                  onClick={this.selectedKnowledge}>Knowledge</button>
          <button type="submit"
                  className={this.state.selectedType === 'behaviour' ? 'active' : ''}
                  onClick={this.selectedBehaviour}>Behaviour</button>
          <button type="submit"
                  className={this.state.selectedType === 'availability' ? 'active' : ''}
                  onClick={this.selectedAvailability}>Availability</button>
        </div>

        <div className="sentiment-buttons">
          <button type="submit"
                  className={this.state.sentiment === 'positive' ? 'active': ''}
                  onClick={this.selectedPositive}>Positive</button>
          <button type="submit"
                  className={this.state.sentiment === 'negative' ? 'active': ''}
                  onClick={this.selectedNegative}>Negative</button>
        </div>

        <button type="submit" onClick={this.doStateSubmit}>Submit</button>
      </div>
    )
  }
});

export default StationStaffForm;
