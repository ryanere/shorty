import Ember from 'ember';
import startApp from '../../helpers/start-app';
import ENV from '../../../config/environment';
import {
  moduleFor,
  test
} from 'ember-qunit';

var App;

moduleFor('controller:short-link', 'ShortLinkController', {
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

test('it generates outboundLink', function() {
  var controller = this.subject(),
      stubModel  = Ember.Object.create({
      url: 'http://awesome.com',
      token: '23dasd'
    });

  Ember.run(function() {
    controller.set('model', stubModel);
  });

  ok(controller.get('model'), 'Expect controller to contain model');
  equal(controller.get('outboundLink'), ENV.APP.HOST + '/s/' + controller.get('model.token'), 'Expected outboundLink to be generated, got: ' + controller.get('outboundLink'));
});
