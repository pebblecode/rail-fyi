'use strict';

var Hapi = require('hapi');
var Code = require('code');
var Lab = require('lab');

var logic = require('./../');

var lab = exports.lab = Lab.script();

lab.experiment('Logic tree', function () {

  var server = void 0;

  lab.beforeEach(function (done) {

    server = new Hapi.Server();
    server.connection();

    server.register([{
      register: logic
    }], function (error) {
      if (error) {
        done(error);
      }
      server.start(function (error) {
        if (error) {
          done(error);
        }
        done();
      });
    });
  });

  lab.afterEach(function (done) {
    server = undefined;
    done();
  });

  lab.test('returns expected tweet for logic for train', function (done) {

    var logicPath = {
      location: 'train',
      interaction: 'staff',
      type: 'behaviour',
      sentiment: 'positive'
    };

    server.methods.decideTweet(logicPath).then(function (result) {
      Code.expect(result).to.equal('I\'ve had a great experience with a staff member on your train today');
      done();
    }, done);
  });

  lab.test('returns expected tweet for logic for station', function (done) {

    var logicPath = {
      location: 'station',
      interaction: 'staff',
      type: 'behaviour',
      sentiment: 'positive'
    };

    server.methods.decideTweet(logicPath).then(function (result) {
      Code.expect(result).to.equal('I\'ve had a great experience with a staff member at your station today');
      done();
    }, done);
  });

  lab.test('returns error if logic is wrong', function (done) {
    var logicPath = {
      location: 'foo',
      interaction: 'bar',
      type: 'baz',
      sentiment: 'bing'
    };

    server.methods.decideTweet(logicPath).then(function (result) {
      // Should not take this path
    }, function (error) {
      Code.expect(error).to.be.an.instanceOf(Error);
      done();
    });
  });
});
//# sourceMappingURL=logic.spec.js.map