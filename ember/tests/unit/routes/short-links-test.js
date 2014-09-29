import Ember from 'ember';
import startApp from '../../helpers/start-app';
import {
  moduleFor,
  test
} from 'ember-qunit';

var App;

moduleFor('route:short-links', 'ShortLinksRoute', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});
