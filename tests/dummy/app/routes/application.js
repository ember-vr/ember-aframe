import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Route.extend({
  updateQueryParams: task(function * () {
    yield timeout(1000);

    let { x, y } = document.querySelector('[camera]').getAttribute('rotation');
    this.controller.setProperties({
      rotX: x,
      rotY: y
    });

    this.get('updateQueryParams').perform();
  }).on('activate').cancelOn('deactivate')
});
