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
    // websocket.send(JSON.stringify({
    //   type: 'connected'
    // }));
    people.updateRoute();
  }

  function onClose(evt)
  {
    // debugger;
  }

  function onMessage(evt)
  {
    // websocket.close();
    let data = JSON.parse(evt.data);
    let id = data.id;
    let otherPeople = people.get('otherPeople');
    let person = otherPeople.findBy('id', id);
    switch (data.type) {
      // case 'id':
      //   otherPeople.pushObject(Ember.Object.create({
      //     id
      //   }));
      //   // everyone tells the new person their route
      //   people.updateRoute();
      //   break;
      case 'move':
        // if (person) {
          person.set('params', data.data);
        // }
        break;
      // case 'route':
      //   if (data.data !== people.get('myRoute')) {
      //     // you clear out others when you switch routes for instant effect
      //     // then the propagation hits later so ignore it
      //     // if (person) {
      //       // another person switched routes
      //       otherPeople.removeObject(person);
      //     // }
      //   } else {
      //     // if (!person) {
      //       otherPeople.pushObject(Ember.Object.create({
      //         id
      //       }));
      //     // }
      //   }
      //   break;
      case 'join':
        // if (!person) {
          otherPeople.pushObject(Ember.Object.create({
            id
          }));
        // }
        break;
      case 'left':
        // if (person) {
          otherPeople.removeObject(person);
        // }
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
