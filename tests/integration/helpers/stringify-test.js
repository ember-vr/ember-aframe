import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | stringify', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{stringify
        dir="alternate"
        dur=dur
      }}
    `);

    assert.equal(this.element.textContent.trim(), 'dir: alternate; dur: undefined');
  });
});
