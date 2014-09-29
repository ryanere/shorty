import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params, 'params');
    console.log(params.shortLinkId, 'params');
    console.log(params['short-link-id']);
    return this.store.find('short-link', params['short-link-id']);
  }
});
