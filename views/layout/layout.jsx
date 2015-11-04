'use strict';

import React from 'react';

const Layout = React.createClass({

  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/styles.css"/>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
});

export default Layout;
