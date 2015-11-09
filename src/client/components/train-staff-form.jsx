'use strict';

const React = require('react');
const StaffForm = require('./station-staff-form.jsx');

const TrainStaffForm = React.createClass({
  displayName: 'TrainStaff',

  render () {
    return (<StaffForm></StaffForm>)
  }
});

module.exports = TrainStaffForm;
