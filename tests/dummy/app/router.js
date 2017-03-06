import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('vr', function() {
    this.route('hello-world');
    this.route('360-image-gallery', function() {
      this.route('city');
      this.route('cubes');
      this.route('sechelt');
    });
  });
  this.route('list');
});

export default Router;
