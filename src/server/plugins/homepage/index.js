'use strict';

const registerPlugin = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/{shortCode?}',
    handler: (req, reply) => {

      server.methods.getShortcodeDetails(req.params.shortCode).then((location) => {

        server.methods.getUserState(req).then((user) => {

          const pageState = Object.assign({}, { location: location }, { user: user });

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
