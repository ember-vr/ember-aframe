import { click, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | vr', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /vr', async function(assert) {
    await visit('/vr?multiplayer=false');

    await click('[data-test-a-back-button="360 Image Gallery"]');

    assert.dom('[data-test-a-sky]')
      .hasAttribute('src', '#city', 'has initial sky');

    await click('[data-test-a-link="#sechelt"]');

    assert.dom('[data-test-a-sky]')
      .hasAttribute('src', '#sechelt', 'has changed sky');
  });
});
