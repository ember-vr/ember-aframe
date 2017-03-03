import Route from 'ember-route';
import injectService from 'ember-service/inject';

export default Route.extend({
  people: injectService(),

  queryParams: {
    rotX: {
      replace: true
    },
    rotY: {
      replace: true
    },
    posX: {
      replace: true
    },
    posY: {
      replace: true
    },
    posZ: {
      replace: true
    }
  },

  actions: {
    didTransition() {
      // this.get('people').updateRoute(this.controller.get('currentRouteName'));
    }
  }
});
