'use strict';

var registerPlugin = (server, options, next) => {

  server.register([{
    register: require('bell')
  }, {
    register: require('hapi-auth-cookie')
  }], (error) => {
    if (error) {
      return next(error);
    }

    server.auth.strategy('session', 'cookie', 'try', {
      cookie: 'sid',
      password: 'cookie_encryption_password',
      isSecure: false
    });

    let settings = Object.assign({}, { provider: 'twitter' }, options.twitter);

    server.auth.strategy('twitter', 'bell', settings);

    //console.log(server.connections[0].states);

    server.route({
      method: ['GET', 'POST'], // Must handle both GET and POST
      path: '/login',          // The callback endpoint registered with the provider
      config: {
        auth: 'twitter'
      },
      handler: function (request, reply) {
        if (!request.auth.isAuthenticated) {
          return reply('Authentication failed due to: ' + request.auth.error.message);
        }

        console.log(request.auth.credentials.profile);
        request.auth.session.set(request.auth.credentials.profile);
        console.log(request.auth);

        // Perform any account lookup or registration, setup local session,
        // and redirect to the application. The third-party credentials are
        // stored in request.auth.credentials. Any query parameters from
        // the initial request are passed back via request.auth.credentials.query.
        return reply.redirect('/report');
      }
    });

    return next();
  });
};

registerPlugin.attributes = {
  name: 'login',
  version: '1.0.0',
  dependencies: []
};

export { registerPlugin as register };
