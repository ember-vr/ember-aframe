import Route from 'ember-route';

export default Route.extend({
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
