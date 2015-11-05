'use strict';

const Boom = require('boom');
const stationList = require('./lib/stations');

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
        return resolve(user);
      });
    }
  });

  server.method({
    name: 'getShortcodeDetails',
    method: (shortCode) => {

      return new Promise((resolve, reject) => {

        if (!shortCode) {
          return resolve({});
        }

        let result = {};

        if ( !isNaN(parseInt(shortCode)) && shortCode.length === 5) {
          result.type = 'train';
          result.code = shortCode;
          result.name = `C2C Train - Carriage ${shortCode}`;
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


  return next();
};

registerPlugin.attributes = {
  name: 'common',
  version: '1.0.0',
  dependencies: []
};

module.exports = registerPlugin;
