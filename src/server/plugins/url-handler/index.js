'use strict';

const Boom = require('boom');
const stationList = require('./lib/stations');

var registerPlugin = (server, options, next) => {

  server.method({
    name: 'parseUrl',
    method: (shortCode) => {

      return new Promise((resolve, reject) => {

        let result = {};

        if ( !isNaN(parseInt(shortCode)) && shortCode.length === 5) {
          result.type = 'train';
          result.code = shortCode;
          result.name = 'C2C Train'
        } else if (/^[A-Za-z]{3}$/i.test(shortCode)) {

          const station = stationList.filter(station => station.code.toLowerCase() === shortCode.toLowerCase())[0];

          if (!station) {
            return reject(Boom.notFound('Station not found'));
          }

          result.type = 'station';
          result.code = shortCode;
          result.name = station.name;

        } else {
          return reject(Boom.badData('Unknown Code'));
        }

        return resolve(result);
      });
    }
  });


  server.route({
    method: 'GET',
    path: '/{shortCode}',
    handler: (req, reply) => {
      server.methods.parseUrl(req.params.shortCode)
        .then((result) => {

          reply.redirect('/?')

        });

        //  server.render('reportpage', result, {runtimeOptions: { renderMethod: 'renderToString'}}, (error, output) => {
        //    if (error) {
        //      return reply(error);
        //    }
        //    const htmlContext = {
        //      remount: output,
        //      state: `window.C2CFYI=${JSON.stringify(result)};`
        //    };
        //
        //    server.render('layout/layout', htmlContext, (error, html) => {
        //      if (error) {
        //        return reply(error);
        //      }
        //      reply(html);
        //    })
        //
        //  });
        //}, (error) => reply(error))
    }
  });


  server.route({
    method: 'POST',
    path: '/submit-post',
    handler: (req, reply) => {
      reply(Object.assign({}, {success: true}, JSON.parse(req.payload)));
    }
  });

  return next();
};

registerPlugin.attributes = {
  name: 'url-handler',
  version: '1.0.0',
  dependencies: []
};

module.exports = registerPlugin;
