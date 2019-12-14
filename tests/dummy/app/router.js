import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

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
