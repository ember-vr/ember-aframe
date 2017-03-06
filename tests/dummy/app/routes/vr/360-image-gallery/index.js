import Route from 'ember-route';

export default Route.extend({
  beforeModel() {
    this.transitionTo('vr.360-image-gallery.city');
  }
});
