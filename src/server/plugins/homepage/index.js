'use strict';

const registerPlugin = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, reply) => {

      // With no code, we have no location details
      const locationDetails = {};

      console.log(locationDetails);

      server.methods.getUserState(req).then((user) => {

        console.log(user);

        const pageState = Object.assign({}, {locationDetails: locationDetails}, {user: user});

        server.render('c2c-app', pageState, {
          runtimeOptions: {
            renderMethod: 'renderToString'
          }
        }, (error, output) => {
          if (error) {
            return reply(error);
          }

          const htmlContext = {
            remount: output,
            state: `window.C2CFYI=${JSON.stringify(pageState)};`
          };

          server.render('layout/layout', htmlContext, (error, html) => {
            if (error) {
              return reply(error);
            }
            reply(html);
          })

        });
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
