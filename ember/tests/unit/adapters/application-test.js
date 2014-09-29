import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:application', 'ApplicationAdapter', {});

test('it exists', function() {
  var adapter = this.subject();
  ok(adapter);
});
