'use strict';

const DecisionTree = require('decision-tree');

var registerPlugin = (server, options, next) => {

  const logicTree = [{
    location: 'train',
    interaction: 'staff',
    type: 'behaviour',
    sentiment: 'positive',
    tweet: 'I\'ve had a great experience with a staff member on your train today'
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'behaviour',
    sentiment: 'negative',
    tweet: 'I\'ve had a bad experience with a staff member on your train today'
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'knowledge',
    sentiment: 'positive',
    tweet: 'Your staff provided me with assistance on the train today'
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'knowledge',
    sentiment: 'negative',
    tweet: 'Your staff were not able to tell me what I needed on the train today'
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'availability',
    sentiment: 'positive',
    tweet: 'Plenty of staff available on your trains today'
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'availability',
    sentiment: 'negative',
    tweet: 'There were no members of staff available on your trains today'
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'cleanliness',
    sentiment: 'positive',
    tweet: 'The facilities on your trains are very clean'
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'cleanliness',
    sentiment: 'negative',
    tweet: 'The facilities on your trains are very dirty and need cleaning'
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'comfort',
    sentiment: 'positive',
    tweet: 'The facilities on your trains are very comfortable'
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'comfort',
    sentiment: 'negative',
    tweet: 'The facilities on your trains are very uncomfortable'
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'damage',
    sentiment: 'positive',
    tweet: 'The facilities on your trains are in great condition'
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'damage',
    sentiment: 'negative',
    tweet: 'The facilities on your trains are broken'
  }, {
    location: 'station',
    interaction: 'staff',
    type: 'behaviour',
    sentiment: 'positive',
    tweet: 'I\'ve had a great experience with a staff member at your station today'
  }, {
    location: 'station',
    interaction: 'staff',
    type: 'behaviour',
    sentiment: 'negative',
    tweet: 'I\'ve had a bad experience with a staff member at your station today'
  }, {
    location: 'station',
    interaction: 'staff',
    type: 'knowledge',
    sentiment: 'positive',
    tweet: 'Your staff provided me with assistance on the station today'
  }, {
    location: 'station',
    interaction: 'staff',
    type: 'knowledge',
    sentiment: 'negative',
    tweet: 'Your staff were not able to provided me with assistance on the station today'
  }, {
    location: 'station',
    interaction: 'staff',
    type: 'availability',
    sentiment: 'positive',
    tweet: 'Plenty of staff available on your station today'
  }, {
    location: 'station',
    interaction: 'staff',
    type: 'availability',
    sentiment: 'negative',
    tweet: 'There were no members of staff available on your station today'
  }, {
    location: 'station',
    interaction: 'facilities',
    type: 'cleanliness',
    sentiment: 'positive',
    tweet: 'The facilities in the station are very clean'
  }, {
    location: 'station',
    interaction: 'facilities',
    type: 'cleanliness',
    sentiment: 'negative',
    tweet: 'The facilities in the station are very dirty and need cleaned'
  }, {
    location: 'station',
    interaction: 'facilities',
    type: 'comfort',
    sentiment: 'positive',
    tweet: 'The facilities in the station are very comfortable'
  }, {
    location: 'station',
    interaction: 'facilities',
    type: 'comfort',
    sentiment: 'negative',
    tweet: 'The facilities in the station are uncomfortable'
  }, {
    location: 'station',
    interaction: 'facilities',
    type: 'damage',
    sentiment: 'positive',
    tweet: 'The facilities on your trains are in great condition'
  }, {
    location: 'station',
    interaction: 'facilities',
    type: 'damage',
    sentiment: 'negative',
    tweet: 'The facilities on your trains are damaged'
  }];

  const decide = new DecisionTree(logicTree, 'tweet', ['location', 'interaction', 'type', 'sentiment']);

  server.method({
    name: 'decideTweet',
    method: (options) => {
      return new Promise((resolve, reject) => {
        let result;
        try {
          result = decide.predict(options);
        } catch (e) {
          return reject(e)
        }
        return resolve(result);
      });
    }
  });

  server.route({
    method: 'GET',
    path: '/get-tweet',
    handler: (req, reply) => {
      console.log(req.query);
      server.methods.decideTweet(req.query).then((tweet) => {
        reply({ tweet: tweet});
      }, reply);
    }
  });

  return next();
};

registerPlugin.attributes = {
  name: 'logic',
  version: '1.0.0',
  dependencies: []
};

module.exports = registerPlugin;
