import Ember from 'ember';
import layout from '../templates/components/a-entity';

export default Ember.Component.extend({
  layout,

  tagName: 'a-entity',
  attributeBindings: [
    'geometry',
    'material',
    'position',
    'sound',
    'visible'
  ]
});
