import Ember from 'ember';

const conflicts = ['layout', 'text'];
const attributeBindings = Object.keys(AFRAME.components).filter(c => !conflicts.includes(c));

export default Ember.Component.extend({
  tagName: 'a-entity',
  // attributeBindings: [
  //   'geometry',
  //   'material',
  //   'position',
  //   'sound',
  //   'visible'
  // ]
  attributeBindings
});
