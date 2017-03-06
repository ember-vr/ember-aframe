import Ember from 'ember';
import { initialize } from 'dummy/initializers/register-components';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Initializer | register components', {
  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(this.application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
