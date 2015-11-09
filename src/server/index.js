'use strict';

require('babel-core/register')({
  presets: ['react', 'es2015']
});

const compose = require('glue').compose;
const join = require('path').join;

const server = {
  debug: {
    log: ['error', 'debug'],
    request: ['error']
  },
  app: {
    sharedDir: join(__dirname, '..', 'shared')
  }
};

const connections = [{
  port: process.env.PORT || 9000,
  labels: ['web'],
  router: {
    stripTrailingSlash: true
  }
}];


const layoutPath = join(__dirname, '..', 'client');
const plugins = {
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


const createServer = () => {
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

      server.on('request-internal', (request, event, tags) => {

        if (tags.error && tags.state) {
          console.error(event);
        }
      });

      const cookieOptions = {
        encoding: 'iron',
        path: '/',
        password: 'c2cfyi',
        isSecure: false
      };

      server.state('user-cookie', cookieOptions);

      server.log(['debug'], `Server started on 9000`);
    });
  });
};

if (!module.parent) {
  createServer();
}

module.exports = createServer;

