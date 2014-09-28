import Ember from 'ember';
import startApp from '../../helpers/start-app';

var App;

module('Integration - Homepage', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('', function() {
  visit('/');

  andThen(function() {
    equal(find('.brand').text(), 'Shorten');
  });
});
