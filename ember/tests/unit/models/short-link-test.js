import Ember from 'ember';
import DS from 'ember-data';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('short-link', 'ShortLink', {});

test('is valid model', function() {
  var model = this.subject({
    url: 'http://awesome.com',
    token: 'alkjsd'
  });

  ok(model);
  ok(model instanceof DS.Model);
});
