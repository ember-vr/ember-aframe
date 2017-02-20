export function initialize(appInstance) {
  // appInstance.inject('route', 'foo', 'service:foo');

  let people = appInstance.lookup('service:people');

  var wsUri = "wss://ember-a-frame-server.herokuapp.com/";
  let websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };

  people.set('ws', websocket);

  function onOpen(evt)
  {
    websocket.send(JSON.stringify({
      type: 'connected'
    }));
    people.updateRoute();
  }

  function onClose(evt)
  {
    // debugger;
  }

  function onMessage(evt)
  {
    // websocket.close();
    let id = evt.data.substr(0, 36);
    let data = JSON.parse(evt.data.substr(37));
    let otherPeople = people.get('otherPeople');
    switch (data.type) {
      case 'id':
        otherPeople.pushObject(Ember.Object.create({
          id
        }));
        // everyone tells the new person their route
        people.updateRoute();
        break;
      case 'move':
        otherPeople.findBy('id', id).set('params', data.data);
        break;
      case 'route':
        otherPeople.findBy('id', id).set('route', data.data);
        break;
      case 'left':
        otherPeople.removeObject(people.get('otherPeople').findBy('id', id));
        break;
    }
  }

  function onError(evt)
  {
    // debugger;
  }
}

export default {
  name: 'connect-socket',
  initialize
};
