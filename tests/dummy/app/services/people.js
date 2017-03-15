import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Service.extend(Ember.Evented, {
  otherPeople: Ember.A(),

  setUpSocket() {
    var wsUri = "wss://ember-a-frame-server.herokuapp.com/";
    let websocket = new WebSocket(wsUri);
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };

    let people = this;

    people.set('ws', websocket);

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

    return new Ember.RSVP.Promise(resolve => {
        websocket.onopen = function(evt) { onOpen(evt) };
        function onOpen(evt)
        {
          // websocket.send(JSON.stringify({
          //   type: 'connected'
          // }));
          // people.updateRoute();
          resolve(websocket);
        }
    });
  },

  updateLocation(params) {
    this.send({
      type: 'move',
      data: params
    });
  },
  updateRoute(route) {
    if (route) {
      if (route.indexOf('vr.') !== 0) {
        let ws = this.get('ws');
        if (ws) {
          ws.close();
          this.set('ws', null);
        }
      }
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
    let promise;
    let ws = this.get('ws');
    if (!ws) {
      promise = this.setUpSocket();
    } else {
      promise = Ember.RSVP.resolve(ws);
    }
    promise.then(ws => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(json));
      }
    });
  },

  updateRouteTask: task(function * () {
    yield timeout(5000);

    // in case a message was lost,
    // send your current route every once in a while
    this.updateRoute();

    this.get('updateRouteTask').perform();
  }).on('init')
});
