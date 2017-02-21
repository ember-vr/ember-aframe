import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Service.extend(Ember.Evented, {
  otherPeople: Ember.A(),

  updateLocation(params) {
    this.send({
      type: 'move',
      data: params
    });
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
    this.send({
      type: 'route',
      data: route
    });
  },

  send(json) {
    let ws = this.get('ws');
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(json));
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
