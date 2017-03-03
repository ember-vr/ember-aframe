import Controller from 'ember-controller';

export default Controller.extend({
  dur: 300,

  actions: {
    changeMaterial(src) {
      this.transitionToRoute(`360-image-gallery.${src.substr(1)}`);
    }
  }
});
