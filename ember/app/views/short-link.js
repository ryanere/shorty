import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['short-link'],

  didInsertElement: function() {
    Ember.run.later(this, function() {
      this.$().addClass('visible');
    }, 500);
  }
});
