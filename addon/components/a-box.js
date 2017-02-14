import Ember from 'ember';
import layout from '../templates/components/a-box';

export default Ember.Component.extend({
  layout,

  tagName: 'a-box',
  attributeBindings: [
    'position',
    'rotation',
    'color'
  ]
});
