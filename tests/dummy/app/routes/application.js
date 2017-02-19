import Ember from 'ember';

export default Ember.Route.extend({
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
  }
});
