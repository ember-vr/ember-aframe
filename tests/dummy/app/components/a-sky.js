import ASky from 'ember-a-frame/components/a-sky';
import toAStr from 'ember-a-frame/macros/to-a-str';
import raw from 'ember-macro-helpers/raw';
import { task, timeout } from 'ember-concurrency';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default ASky.extend(InboundActions, {
  attributeBindings: [
    'animation__fade'
  ],

  animation__fade: toAStr({
    property: raw('material.color'),
    startEvents: raw('set-image-fade'),
    dir: raw('alternate'),
    dur: 'dur',
    from: raw('#FFF'),
    to: raw('#000')
  }),

  changeMaterialTask: task(function * (src) {
    yield timeout(this.get('dur'));

    this.sendAction('changeMaterial', src);
  }),

  actions: {
    startChangingMaterial(src) {
      this.element.emit('set-image-fade');

      this.get('changeMaterialTask').perform(src);
    }
  }
});
