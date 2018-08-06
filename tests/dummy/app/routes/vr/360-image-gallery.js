import Route from '@ember/routing/route';
import { scheduleOnce } from '@ember/runloop';

export default Route.extend({
  actions: {
    updateSrc(src) {
      scheduleOnce('afterRender', () => {
        this.controller.set('skySrc', src);
      });
    }
  }
});
