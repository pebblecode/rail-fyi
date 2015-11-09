'use strict';

const React = require('react');
const StaffForm = require('./staff-form.jsx');

const TrainStaffForm = React.createClass({
  displayName: 'TrainStaff',

  render () {
    return (<StaffForm></StaffForm>)
  }
});

module.exports = TrainStaffForm;
