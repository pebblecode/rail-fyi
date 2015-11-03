'use strict';

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import stationList from './lib/station-list';

const FYITabs = React.createClass({
  componentDidMount() {

    let activeTab = 0;
    let location = {};

    // TODO: This is stupidly niave
    if (this.props.params.stationId) {
      activeTab = 0;
      location = stationList.filter((station) => station.code === this.props.params.stationId)[0] || {
        code: null,
        name: 'Unknown Station'
      }
    } else {
      activeTab = 1;
      location = {
        code: this.props.params.carridgeId,
        name: 'C2C Train Carrage'
      }
    }

    this.setState({
      selectedTab: activeTab,
      loation: location
    });

    console.log(this.state);
  },

  render () {
    return (
      <div>
        <Tabs selectedIndex={this.state.selectedTab}>
          <TabList>
            <Tab>Station</Tab>
            <Tab>Train</Tab>
          </TabList>
          <TabPanel>
            <p>Station Tab</p>
          </TabPanel>
          <TabPanel>
            <p>Train Tab</p>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
});

export default FYITabs;
