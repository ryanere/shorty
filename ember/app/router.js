import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('short-links', { path: '/' });
  this.route('short-link', { path: '/:short-link-id'});
});

export default Router;
