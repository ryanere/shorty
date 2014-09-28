import Ember from 'ember';

export default Ember.Controller.extend(
  Ember.Validations.Mixin, {

  validations: {
    url: {
      url: {
        allowBlank: true, // don't show "isBlank" errors off the bat
        allowIp:    true,
        allowPort:  true,
        protocols:  ['http', 'https']
      }
    }
  },

  url: '',

  isValid: function() {
    var url    = this.get('url'),
        errors = this.get('errors.url');

    return (url.length && !errors.length) ? true : false;
  }.property('url', 'errors.url'),

  actions: {
    createShortLink: function() {
      var controller = this,
          url        = controller.get('url'),
          isValid    = controller.get('isValid');

      if (isValid) {
        controller.store.createRecord('short-link', {
          url: url
        }).save().then(function(shortLink) {
          controller.set('url', '');
          controller.transitionToRoute('short-links.show', shortLink.id);
        }, function(data) {
          controller.set('errors', data.errors);
        });
      }
    }
  }
});
