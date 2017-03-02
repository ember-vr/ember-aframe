import Ember from 'ember';
import AFrame from 'aframe';
import { task } from 'ember-concurrency';

const conflicts = ['layout'];
const attributeBindings = Object.keys(AFrame.components).filter(c => !conflicts.includes(c));

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
      return yield new Ember.RSVP.Promise(resolve => {
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
