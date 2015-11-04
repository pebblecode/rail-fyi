'use strict';

import React from 'react';

const Layout = React.createClass({

  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
});

export default Layout;
