import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | list');

test('visiting /list', function(assert) {
  visit('/list');

  click(
    testSelector('default-attributes-header') + ' '
      + testSelector('pointer')
  );

  click(
    testSelector('default-components-header') + ' '
      + testSelector('pointer')
  );

  click(
    testSelector('primitive-list-header') + ' '
      + testSelector('pointer')
  );

  andThen(function() {
    assert.ok(find(testSelector('default-attribute')).length, 'there are default attributes');
    assert.ok(find(testSelector('default-component')).length, 'there are default components');
    assert.ok(find(testSelector('primitive')).length, 'there are primitives');
  });
});
