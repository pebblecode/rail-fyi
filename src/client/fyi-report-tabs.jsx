'use strict';

import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const FyiReportTabs = React.createClass({

  componentDidMount() {

  },

  getInitialState() {
    //return {
    //  station: !this.params.stationId,
    //  train: !this.params.carriageId
    //}

    console.log(this.params);
    console.log(this.state);
    return {};
  },

  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Station</Tab>
          <Tab>Train</Tab>
        </TabList>
        <TabPanel>
          {this.props.children}
        </TabPanel>
        <TabPanel>
          {this.props.children}
        </TabPanel>
      </Tabs>
    )
  }
});

export default FyiReportTabs;
