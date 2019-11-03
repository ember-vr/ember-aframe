import ASky from 'ember-aframe/components/a-sky';
import stringifyComponent from 'ember-aframe/macros/stringify-component';
import { raw } from 'ember-awesome-macros';
import { task, timeout } from 'ember-concurrency';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default ASky.extend(InboundActions, {
  'data-test-a-sky': '',

  attributeBindings: [
    'animation__fade'
  ],

  animation__fade: stringifyComponent('animation', {
    property: raw('material.color'),
    startEvents: raw('set-image-fade'),
    dir: raw('alternate'),
    dur: 'dur',
    from: raw('#FFF'),
    to: raw('#000'),

    // regressed 3.2.5 => 4.0.0-beta1
    // https://github.com/supermedium/superframe/issues/192
    loop: 1
  }),

  changeMaterialTask: task(function * (src) {
    this.element.emit('set-image-fade');

    yield timeout(this.get('dur'));

    this.get('changeMaterial')(src);
  }),

  actions: {
    startChangingMaterial(src) {
      this.get('changeMaterialTask').perform(src);
    }
  }
});
