import Route from 'ember-route';

export default Route.extend({
  beforeModel() {
    this.transitionTo('360-image-gallery.city');
  }
});
