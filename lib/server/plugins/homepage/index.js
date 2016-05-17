'use strict';

var registerPlugin = function registerPlugin(server, options, next) {

  server.route({
    method: 'GET',
    path: '/{shortCode?}',
    handler: function handler(req, reply) {

      server.methods.getShortcodeDetails(req.params.shortCode).then(function (location) {

        server.methods.getUserState(req).then(function (user) {

          var pageState = Object.assign({}, { location: location }, { user: user });

          server.render('c2c-app', pageState, {
            runtimeOptions: {
              renderMethod: 'renderToString'
            }
          }, function (error, output) {
            if (error) {
              return reply(error);
            }

            var htmlContext = {
              remount: output,
              state: 'window.C2CFYI=' + JSON.stringify(pageState) + ';'
            };

            server.render('layout/layout', htmlContext, function (error, html) {
              if (error) {
                return reply(error);
              }
              reply(html);
            });
          });
        }, function (error) {
          return reply(error);
        });
      }, function (error) {
        return reply(error);
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
//# sourceMappingURL=index.js.map