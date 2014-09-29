import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('short-link', 'ShortLink', {});

test('it exists', function() {
  var model = this.subject();
  ok(!!model);
});
