'use strict';

/**
 * Registered the static path for files
 * @param server
 * @param options
 * @param next
 * @returns {*}
 */
const registerPlugin = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/{file*}',
    config: {
      auth: false,
      handler: {
        directory: {
          path: options.staticDir
        }
      }
    }
  });

  return next();
};

registerPlugin.attributes = {
  name: 'static',
  version: '1.0.0',
  dependencies: []
};

module.exports = registerPlugin;
