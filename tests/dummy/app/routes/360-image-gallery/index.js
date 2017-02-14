import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('360-image-gallery.city');
  }
});
