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
  }
});
