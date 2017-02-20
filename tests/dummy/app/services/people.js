import Ember from 'ember';

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
    } else {
      route = this.get('myRoute');
    }
    if (this.get('ws').readyState === WebSocket.OPEN) {
      this.get('ws').send(JSON.stringify({
        type: 'route',
        data: route
      }));
    }
  }
});
