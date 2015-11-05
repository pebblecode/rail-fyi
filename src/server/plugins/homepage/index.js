'use strict';

const registerPlugin = (server, options, next) => {

  server.method({
    name: 'reportPage',
    method: (req) => {
      return new Promise((resolve, reject) => {
        resolve({
          profile: req.auth.credentials
        });
      });
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      reply.view('homepage', {}, { layout: 'c2c' });
    }
  });

  server.route({
    method: 'GET',
    path: '/report',
    config: {
      auth: 'session'
    },
    handler: (req, reply) => {
      server.methods.reportPage(req).then((details) => {
        reply.view('reportpage', details, { layout: 'c2c' });
      });
    }
  });

  return next();
};

registerPlugin.attributes = {
  name: 'homepage',
  version: '1.0.0',
  dependencies: []
};

module.exports = registerPlugin;
