'use strict';

var registerPlugin = (server, options, next) => {

  server.method({
    name: 'homepage',
    method: (req) => {
      return new Promise((resolve, reject) => {
        resolve({});
      });
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      server.methods.homepage(req).then((homepage) => {
        reply.view('homepage', homepage, { layout: 'c2c' });
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

export { registerPlugin as register };
