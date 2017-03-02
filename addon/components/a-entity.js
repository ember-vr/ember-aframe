import Component from 'ember-component';
import RSVP from 'rsvp';
import AFrame from 'aframe';
import { task } from 'ember-concurrency';

const { Promise } = RSVP;

const conflicts = ['layout'];
const attributeBindings = Object.keys(AFrame.components).filter(c => !conflicts.includes(c));

export default Component.extend({
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
      yield new Promise(resolve => {
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
