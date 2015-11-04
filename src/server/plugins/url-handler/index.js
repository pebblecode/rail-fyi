'use strict';

var registerPlugin = (server, options, next) => {

  server.method({
    name: 'parseUrl'
  })

  return next();
};

registerPlugin.attributes = {
  name: 'url-handler',
  version: '1.0.0',
  dependencies: []
};

export default registerPlugin;
