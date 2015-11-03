'use strict';

import React from 'react';

const FYIWelcome = React.createClass({
  render () {
    return (
      <div className="welcome">
        <h2>Welcome to C2C FYI</h2>
        {this.props.children}
      </div>
    )
  }
});

export default FYIWelcome;
