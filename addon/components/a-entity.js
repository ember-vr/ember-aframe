import Ember from 'ember';
import { task } from 'ember-concurrency';

const conflicts = ['layout'];
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
  attributeBindings,

  _setUpEvents: task(function * () {
    let trigger;
    try {
      return new Ember.RSVP.Promise(resolve => {
        trigger = () => {
          resolve();
          this.trigger('loaded');
        };
        this.$().one('loaded', trigger);
      });
    } catch (err) {
      if (trigger) {
        this.$().off('loaded', trigger);
      }
    }
  }).on('didInsertElement')
});
