'use strict';

const DecisionTree = require('decision-tree');

module.exports = () => {

  const logicTree = [{
    location: 'train',
    interaction: 'staff',
    type: 'behaviour',
    sentiment: 'positive',
    tweet: 'I\'ve had a great experience with a staff member on your train today #c2cfyi'
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'behaviour',
    sentiment: 'negative',
    tweet: 'I\'ve had a bad experience with a staff member on your train today #c2cfyi'
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'knowledge',
    sentiment: 'positive',
    tweet: ''
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'knowledge',
    sentiment: 'negative',
    tweet: ''
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'availability',
    sentiment: 'positive',
    tweet: ''
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'availability',
    sentiment: 'negative',
    tweet: ''
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'cleanliness',
    sentiment: 'positive',
    tweet: ''
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'cleanliness',
    sentiment: 'negative',
    tweet: ''
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'comfort',
    sentiment: 'positive',
    tweet: ''
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'comfort',
    sentiment: 'negative',
    tweet: ''
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'damage',
    sentiment: 'positive',
    tweet: ''
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'damage',
    sentiment: 'negative',
    tweet: ''
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'behaviour',
    sentiment: 'positive',
    tweet: 'I\'ve had a great experience with a staff member on your train today #c2cfyi'
  }, {
    location: 'train',
    interaction: 'staff',
    type: 'behaviour',
    sentiment: 'negative',
    tweet: 'I\'ve had a bad experience with a staff member on your train today #c2cfyi'
  }, {
    location: 'station',
    interaction: 'staff',
    type: 'knowledge',
    sentiment: 'positive',
    tweet: ''
  }, {
    location: 'station',
    interaction: 'staff',
    type: 'knowledge',
    sentiment: 'negative',
    tweet: ''
  }, {
    location: 'station',
    interaction: 'staff',
    type: 'availability',
    sentiment: 'positive',
    tweet: ''
  }, {
    location: 'station',
    interaction: 'staff',
    type: 'availability',
    sentiment: 'negative',
    tweet: ''
  }, {
    location: 'station',
    interaction: 'facilities',
    type: 'cleanliness',
    sentiment: 'positive',
    tweet: ''
  }, {
    location: 'train',
    interaction: 'facilities',
    type: 'cleanliness',
    sentiment: 'negative',
    tweet: ''
  }, {
    location: 'station',
    interaction: 'facilities',
    type: 'comfort',
    sentiment: 'positive',
    tweet: ''
  }, {
    location: 'station',
    interaction: 'facilities',
    type: 'comfort',
    sentiment: 'negative',
    tweet: ''
  }, {
    location: 'station',
    interaction: 'facilities',
    type: 'damage',
    sentiment: 'positive',
    tweet: ''
  }, {
    location: 'station',
    interaction: 'facilities',
    type: 'damage',
    sentiment: 'negative',
    tweet: ''
  }];

  const decide = DecisionTree(logicTree, 'tweet', ['location', 'interaction', 'type', 'sentiment']);

  return (options) => decide.evaluate(options);

};
