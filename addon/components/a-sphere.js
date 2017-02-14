import Ember from 'ember';
import layout from '../templates/components/a-sphere';

export default Ember.Component.extend({
  layout,

  tagName: 'a-sphere',
  attributeBindings: [
    'position',
    'radius',
    'color'
  ]
});
