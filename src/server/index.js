'use strict';

import { compose } from 'glue';
import { join } from 'path';

let server = {
  debug: {
    log: ['error', 'debug'],
    request: ['error']
  },
  app: {

  }
};

let connections = [{
  port: process.env.PORT || 9000,
  labels: ['web'],
  router: {
    stripTrailingSlash: true
  }
}];


let layoutPath = join(__dirname, '..', '..', 'views');
let plugins = {
  inert: {},
  vision: {},
  visionary: {
    path: layoutPath,
    layout: true,
    layoutPath: join(layoutPath, 'layout'),
    engines: {
      html: require('handlebars')
    },
    isCached: process.env.NODE_ENV === 'production',
    helpersPath: join(layoutPath, 'helpers')
  },
  './homepage': {},
  './static': [{
    options: {
      staticDir: join(__dirname, '..', '..', 'public')
    }
  }]
};


let createServer = () => {
  compose({
    server: server,
    connections: connections,
    plugins: plugins
  }, {
    relativeTo: join(__dirname, 'plugins')
  }, (error, server) => {
    if (error) {
      throw error;
    }

    server.start ((error) => {
      if (error) {
        throw error;
      }

      server.log(['debug'], `Server started on 9000`);
    });
  });
};

if (!module.parent) {
  createServer();
}

export default createServer

