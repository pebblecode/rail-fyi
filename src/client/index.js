import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';

let LocationInformation = React.createClass({
  getInitialState () {
    return {
      dateTime: this.props.dateTime || new Date(),
      location: this.props.location || "Liverpool St Station, Platform #2"
    }
  },
  render () {
    let currentDate = moment(this.state.dateTime).format('DD/MM/YYYY');
    let currentTime = moment(this.state.dateTime).format('HH:mm');
    return (
      <div className="location-information">
        <h3>Location: {this.state.location}</h3>
        <h4>Date: {currentDate}</h4>
        <h4>Time: {currentTime}</h4>
      </div>
    )
  }
});

let StationTab = React.createClass({
  render () {
    return (
      <div>
        <h2>Station</h2>
        <LocationInformation location="Kings Cross Platform 9 & 3/4"></LocationInformation>
      </div>
    )
  }
});


let TrainTab = React.createClass({
  getInitialState: function () {
    return {
      staff: false,
      facilities: false
    };
  },
  onStaffClick(evt) {
    this.setState({
      staff: true,
      facilities: false
    });

  },
  onFacilitiesClick(evt) {
    this.setState({
      staff: false,
      facilities: true
    });
  },
  render () {


    return (
      <div>
        <h2>Train</h2>
        <LocationInformation location="Carriage 53245"></LocationInformation>

        <img alt="Staff" onClick={this.onStaffClick}/>
        <img alt="Facilities" onClick={this.onFacilitiesClick}/>

        { this.state.staff ? <div>Staff</div> : null }
        { this.state.facilities ? <div>Facilities</div> : null }

      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <Tabs>
      <TabList>
        <Tab>Station</Tab>
        <Tab>Train</Tab>
      </TabList>
      <TabPanel>
        <StationTab/>
      </TabPanel>
      <TabPanel>
        <TrainTab/>
      </TabPanel>
    </Tabs>
  </div>,
  document.getElementById('app-attach')
);

