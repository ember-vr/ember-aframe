import Route from 'ember-route';
import { scheduleOnce } from 'ember-runloop';

export default Route.extend({
  actions: {
    updateSrc(src) {
      scheduleOnce('afterRender', () => {
        this.controller.set('skySrc', src);
      });
    }
  }
});
