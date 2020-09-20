import Route from '@ember/routing/route';
import { scheduleOnce } from '@ember/runloop';

export default Route.extend({
  _updateSrc(src) {
    // eslint-disable-next-line ember/no-controller-access-in-routes
    this.controller.set('skySrc', src);
  },

  actions: {
    updateSrc(src) {
      scheduleOnce('afterRender', this, this._updateSrc, src);
    }
  }
});
