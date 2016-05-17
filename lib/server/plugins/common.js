'use strict';

var Boom = require('boom');
var join = require('path').join;

var registerPlugin = function registerPlugin(server, options, next) {

  var stationList = require(join(server.settings.app.sharedDir, 'stations.js'));

  server.method({
    name: 'getUserState',
    method: function method(request) {

      return new Promise(function (resolve, reject) {

        var user = request.state['user-cookie'];

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
    method: function method(shortCode) {

      return new Promise(function (resolve, reject) {

        if (!shortCode) {
          return resolve({});
        }

        var result = {};

        if (!isNaN(parseInt(shortCode)) && shortCode.length === 5) {
          result.type = 'train';
          result.code = shortCode;
          result.name = 'C2C Train - Carriage ' + shortCode;
        } else if (/^[A-Za-z]{3}$/i.test(shortCode)) {

          var station = stationList.filter(function (station) {
            return station.crsCode && station.crsCode.toLowerCase() === shortCode.toLowerCase();
          })[0];

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
//# sourceMappingURL=common.js.map