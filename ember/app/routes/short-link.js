import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('short-link', params['short-link-id']);
  }
});
