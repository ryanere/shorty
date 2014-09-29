import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['short-links-show'],

  didInsertElement: function() {
    Ember.run.later(this, function() {
      this.$().addClass('visible');
    }, 1000);
  }
});
