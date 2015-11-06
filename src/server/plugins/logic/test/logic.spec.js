'use strict';

const Hapi = require('hapi');
const Code = require('code');
const Lab = require('lab');

const logic = require('./../');

const lab = exports.lab = Lab.script();

lab.experiment('Logic tree', () => {

  let server;

  lab.beforeEach((done) => {

    server = new Hapi.Server();
    server.connection();

    server.register([{
      register: logic
    }], (error) => {
      throw error;
      done();
    });
  });

  lab.afterEach((done) => {
    server = undefined;
  });

  lab.test('returns expected tweet for logic', (done) => {
    const logicPath = {
      location: 'train',
      interaction: 'staff',
      type: 'behaviour',
      sentiment: 'positive'
    };

    server.methods.decideTweet(logicPath).then((result) => {
      Code.expect(result).to.equal('I\'ve had a great experience with a staff member on your train today #c2cfyi');
      done();
    })

  })

});
