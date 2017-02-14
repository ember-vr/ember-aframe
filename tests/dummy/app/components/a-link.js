import AEntity from 'ember-a-frame/components/a-entity';
import { tag } from 'ember-awesome-macros';

export default AEntity.extend({
  classNames: ['link'],
  attributeBindings: [
    'event-set__1',
    'event-set__2',
    'event-set__3',
    'event-set__4',
  ],

  geometry: 'primitive: plane; height: 1; width: 1',
  material: tag`shader: flat; src: ${'thumb'}`,
  sound: 'on: click; src: #click-sound',
  'event-set__1': '_event: mousedown; scale: 1 1 1',
  'event-set__2': '_event: mouseup; scale: 1.2 1.2 1',
  'event-set__3': '_event: mouseenter; scale: 1.2 1.2 1',
  'event-set__4': '_event: mouseleave; scale: 1 1 1'
});
