import AEntity from 'ember-aframe/components/a-entity';
import { tag } from 'ember-awesome-macros';
import { readOnly } from '@ember/object/computed';

export default AEntity.extend({
  'data-test-a-link': readOnly('src'),

  classNames: ['link'],
  attributeBindings: [
    'event-set__mouseenter',
    'event-set__mouseleave'
  ],

  geometry: 'primitive: plane; height: 1; width: 1',
  material: tag`shader: flat; src: ${'thumb'}`,
  sound: 'on: click; src: #click-sound',
  'event-set__mouseenter': 'scale: 1.2 1.2 1',
  'event-set__mouseleave': 'scale: 1 1 1'
});
