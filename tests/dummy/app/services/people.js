import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Service.extend(Ember.Evented, {
  otherPeople: Ember.A(),

  updateLocation(params) {
    if (this.get('ws').readyState === WebSocket.OPEN) {
      this.get('ws').send(JSON.stringify({
        type: 'move',
        data: params
      }));
    }
  },
  updateRoute(route) {
    if (route) {
      this.set('myRoute', route);
      this.get('otherPeople').clear();
    } else {
      route = this.get('myRoute');
      if (!route) {
        // websocket connected before the first route
        return;
      }
    }
    if (this.get('ws').readyState === WebSocket.OPEN) {
      this.get('ws').send(JSON.stringify({
        type: 'route',
        data: route
      }));
    }
  },

  updateRouteTask: task(function * () {
    yield timeout(5000);

    // in case a message was lost,
    // send your current route every once in a while
    this.updateRoute();

    this.get('updateRouteTask').perform();
  }).on('init')
});
