import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.ObjectController.extend({
  outboundLink: function() {
    var model = this.get('model'),
        token = model.get('token');

    return ENV.APP.HOST + '/s/' + token;
  }.property('model')
});
