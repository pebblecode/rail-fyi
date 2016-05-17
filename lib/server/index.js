'use strict';

require('babel-core/register')({
  presets: ['react', 'es2015']
});

var compose = require('glue').compose;
var join = require('path').join;

var server = {
  debug: {
    log: ['error', 'debug'],
    request: ['error']
  },
  app: {
    sharedDir: join(__dirname, '..', 'shared')
  }
};

var connections = [{
  port: process.env.PORT || 9000,
  labels: ['web'],
  router: {
    stripTrailingSlash: true
  }
}];

var layoutPath = join(__dirname, '..', 'client');
var plugins = {
  inert: {},
  vision: {},
  visionary: {
    path: layoutPath,
    engines: {
      jsx: require('hapi-react-views')
    },
    isCached: process.env.NODE_ENV === 'production'
  },
  './login': [{
    options: {
      twitter: {
        password: 'c2cfyi',
        clientId: 'JCmN7QwgJGblfpTp0Lry3HvTE',
        clientSecret: 'E6LnrFDCkTcO5VR0rJKgHKG8TpBYa6rnYiEy8IqgW3LUHsAzj7',
        isSecure: false
      }
    }
  }],
  './common': {},
  './logic': {},
  './homepage': {},
  './static': [{
    options: {
      staticDir: join(__dirname, '..', '..', 'public')
    }
  }]
};

var createServer = function createServer() {
  compose({
    server: server,
    connections: connections,
    plugins: plugins
  }, {
    relativeTo: join(__dirname, 'plugins')
  }, function (error, server) {
    if (error) {
      throw error;
    }

    server.start(function (error) {
      if (error) {
        throw error;
      }

      server.on('request-internal', function (request, event, tags) {

        if (tags.error && tags.state) {
          console.error(event);
        }
      });

      var cookieOptions = {
        encoding: 'iron',
        path: '/',
        password: 'c2cfyi',
        isSecure: false
      };

      server.state('user-cookie', cookieOptions);

      server.log(['debug'], 'Server started on 9000');
    });
  });
};

if (!module.parent) {
  createServer();
}

module.exports = createServer;
//# sourceMappingURL=index.js.map