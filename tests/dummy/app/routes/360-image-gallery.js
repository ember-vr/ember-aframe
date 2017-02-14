import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateSrc(src) {
      Ember.run.scheduleOnce('afterRender', () => {
        this.controller.set('skySrc', src);
      });
    }
  }
});
