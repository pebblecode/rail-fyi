'use strict';

import React from 'react';

const Layout = React.createClass({
  displayName: 'Layout',

  render() {
    return (
      <html>
        <head>
          <title>{this.props.title || "C2C App"}</title>
          <link rel="stylesheet" href="/css/styles.css"/>
        </head>
        <body>
          <div id="app-mount" dangerouslySetInnerHTML={{ __html: this.props.remount }}></div>
          <script id="app-state" dangerouslySetInnerHTML={{ __html: this.props.state }}></script>
        </body>

        <script src="/js/build.js"></script>
      </html>
    );
  }
});

export default Layout;
