import Ember from 'ember';
import startApp from '../../helpers/start-app';
import {
  moduleFor,
  test
} from 'ember-qunit';

var App;

moduleFor('controller:short-links', 'ShortLinksController', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('it validates model', function() {
  var controller = this.subject();

  equal(controller.get('url'), '', 'Expected url property to be set to empty string, got: ' + controller.get('url'));
  equal(controller.get('isValid'), false, 'Expected blank url property to invalidate model, got: ' + controller.get('isValid'));

  Ember.run(function() {
    controller.set('url', 'awesome');
  });

  equal(controller.get('isValid'), false, 'Expected malformed url property to invalidate model, got: ' + controller.get('isValid'));

  Ember.run(function() {
    controller.set('url', 'http://awesome.com');
  });

  equal(controller.get('isValid'), true, 'Expected properly formed url property to validate model, got: ' + controller.get('isValid'));
});

test('it populates errors object when passed invalid attributes', function() {
  var controller = this.subject();

  equal(controller.get('url'), '', 'Expected url property to be set to empty string, got: ' + controller.get('url'));
  equal(controller.get('errors.url').length, 0, 'Expected errors.url array to be empty, got: ' + controller.get('errors.url').length);

  Ember.run(function() {
    controller.set('url', 'awesome');
  });

  equal(controller.get('errors.url').length, 1, 'Expected errors.url array to contain one error, got: ' + controller.get('errors.url').length);
  equal(controller.get('errors.url')[0], 'Not a valid URL (ex: http://shortyrules.com)', 'Expected errors.url array in position 0 to contain error message, got: ' + controller.get('errors.url')[0]);

  Ember.run(function() {
    controller.set('url', 'http://awesome.com');
  });

  equal(controller.get('errors.url').length, 0, 'Expected errors.url array to be empty, got: ' + controller.get('errors.url').length);
});
