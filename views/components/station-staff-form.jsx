'use strict';

import React from 'react';

const StationStaffForm = React.createClass({
  getInitialState() {
    return { selectedType: 'knowledge', sentiment: 'positive'};
  },

  selectedKnowledge () {
    this.setState({ selectedType: 'knowledge'});
  },

  selectedBehaviour () {
    console.log('called');
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

  render () {
    return (
      <div>
        <div className="staff-id">
          <label htmlFor="staff-id">Staff ID or Name</label>
          <input type="text" name="staff-id" id="staff-id" placeholder="Please enter the staff id or name"/>
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
      </div>
    )
  }
});

export default StationStaffForm;
