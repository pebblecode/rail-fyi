'use strict';

import React from 'react';
import Layout from './layout/layout.jsx';
import LocationDetails from './location-details.jsx';

const ReportPage = React.createClass({

  render () {
    return (
      <Layout title="C2C App">
        <LocationDetails type={this.props.type} code={this.props.code} name={this.props.name} />
      </Layout>
    );
  }
});

export default ReportPage;
