import Ember from 'ember';

export default Ember.Controller.extend({
  url: null,

  actions: {
    createShortLink: function() {
      var controller = this,
          url        = controller.get('url');

      controller.store.createRecord('short-link', {
        url: url
      }).save().then(function(shortLink) {
        controller.transitionToRoute('short-links.show', shortLink.id);
      });
    }
  }
});
