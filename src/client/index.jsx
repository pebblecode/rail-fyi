import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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

let PanelSelector = React.createClass({
  getInitialState: function () {
    return {
      selectedIndex: 0
    };
  },
  handleClick: function (i) {
    this.setState({
      selectedIndex: i
    });
  },
  render () {
    return (
      <div>
        {this.props.titles.map(function (title, i) {
          return (
            <div onClick={this.handleClick.bind(this, i)} key={i}>
              {title}
            </div>
          );
        }, this)}
        {this.props.children[this.state.selectedIndex]}
      </div>

    );
  }
});

let StationTab = React.createClass({
  render () {
    return (
      <div>
        <h2>Station</h2>
        <LocationInformation location="Kings Cross Platform 9 & 3/4"></LocationInformation>
        <PanelSelector titles={[<img alt='1' src='1.png'></img>, <img alt='3' src='2.png'></img>]}>
          <div>1</div>
          <div>2</div>
        </PanelSelector>
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

        <p>
          <img alt="Staff" onClick={this.onStaffClick}/>
        </p>

        <p>
          <img alt="Facilities" onClick={this.onFacilitiesClick}/>
        </p>
        { this.state.staff && <div>Staff</div> }
        { this.state.facilities && <div>Facilities</div> }
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

