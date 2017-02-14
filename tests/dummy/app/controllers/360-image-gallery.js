import Ember from 'ember';

export default Ember.Controller.extend({
  dur: 300,

  actions: {
    changeMaterial(src) {
      this.transitionToRoute('360-image-gallery.' + src.substr(1));
    }
  }
});
