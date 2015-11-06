'use strict';

const Hapi = require('hapi');
const Code = require('code');
const Lab = require('lab');

const logic = require('./../src/server/plugins/logic');

const lab = exports.lab = Lab.script();

lab.experiment('Logic tree', () => {

  let server;

  lab.beforeEach((done) => {

    server = new Hapi.Server();
    server.connection();

    server.register([{
      register: logic
    }], (error) => {
      if (error) { done(error); }
      server.start((error) => {
        if (error) { done(error); }
        done();
      })
    });
  });

  lab.afterEach((done) => {
    server = undefined;
    done();
  });

  lab.test('returns expected tweet for logic for train', (done) => {

    const logicPath = {
      location: 'train',
      interaction: 'staff',
      type: 'behaviour',
      sentiment: 'positive'
    };

    server.methods.decideTweet(logicPath).then((result) => {
      Code.expect(result).to.equal('I\'ve had a great experience with a staff member on your train today');
      done();
    }, done)

  });

  lab.test('returns expected tweet for logic for station', (done) => {

    const logicPath = {
      location: 'station',
      interaction: 'staff',
      type: 'behaviour',
      sentiment: 'positive'
    };

    server.methods.decideTweet(logicPath).then((result) => {
      Code.expect(result).to.equal('I\'ve had a great experience with a staff member at your station today');
      done();
    }, done)

  });

  lab.test('returns error if logic is wrong', (done) => {
    const logicPath = {
      location: 'foo',
      interaction: 'bar',
      type: 'baz',
      sentiment: 'bing'
    };

    server.methods.decideTweet(logicPath).then((result) => {
      // Should not take this path
    }, (error) => {
      Code.expect(error).to.be.an.instanceOf(Error);
      done();
    })
  })

});
