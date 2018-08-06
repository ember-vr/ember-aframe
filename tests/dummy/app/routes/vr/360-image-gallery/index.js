import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this.transitionTo('vr.360-image-gallery.city');
  }
});
