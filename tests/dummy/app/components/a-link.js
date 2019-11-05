import AEntity from 'ember-aframe/components/a-entity';
import { raw } from 'ember-awesome-macros';
import { readOnly } from '@ember/object/computed';
import stringify from 'ember-aframe/macros/stringify';
import stringifyCoordinates from 'ember-aframe/macros/stringify-coordinates';
import stringifyComponent from 'ember-aframe/macros/stringify-component';

export default AEntity.extend({
  'data-test-a-link': readOnly('src'),

  classNames: ['link'],
  attributeBindings: [
    'event-set__mouseenter',
    'event-set__mouseleave'
  ],

  geometry: stringifyComponent('geometry', {
    primitive: raw('plane'),
    height: 1,
    width: 1
  }),
  material: stringifyComponent('material', {
    shader: raw('flat'),
    src: 'thumb'
  }),
  sound: stringifyComponent('sound', {
    on: raw('click'),
    src: raw('#click-sound')
  }),
  'event-set__mouseenter': stringify({
    scale: stringifyCoordinates(1.2, 1.2, 1)
  }),
  'event-set__mouseleave': stringify({
    scale: stringifyCoordinates(1, 1, 1)
  })
});
