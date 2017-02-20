import Ember from 'ember';

export default Ember.Route.extend({
  people: Ember.inject.service(),

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
