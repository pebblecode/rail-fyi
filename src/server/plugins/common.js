'use strict';

const registerPlugin = (server, options, next) => {

  server.method({
    name: 'getUserState',
    method: (request) => {

      return new Promise((resolve, reject) => {

        let user = request.state['user-cookie'];

        if (!user) {
          user = {
            id: 'unknown',
            username: 'Unknown User'
          };
        }

        console.log(user);
        return resolve(user);
      });
    }
  });


  return next();
};

registerPlugin.attributes = {
  name: 'common',
  version: '1.0.0',
  dependencies: []
};

module.exports = registerPlugin;
