import Component from 'ember-component';
import get from 'ember-metal/get';
import on from 'ember-evented/on';
import { scheduleOnce } from 'ember-runloop';
import { addObserver, removeObserver } from 'ember-metal/observer';
import RSVP from 'rsvp';
import { task } from 'ember-concurrency';
import { defaultComponents } from '../utils/components';

const { Promise } = RSVP;

function playAfterChange() {
  scheduleOnce('afterRender', () => {
    // let { element } = this;
    // element.pause();
    // element.play();
  });
}

export default Component.extend({
  tagName: 'a-entity',
  // attributeBindings: [
  //   'geometry',
  //   'material',
  //   'position',
  //   'sound',
  //   'visible'
  // ]
  attributeBindings: defaultComponents,

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
  }).on('didInsertElement'),

  _toggleObservers(func) {
    get(this, 'attributeBindings').forEach(attribute => {
      func(this, attribute.split(':')[0], this, playAfterChange);
    });
  },

  _onDidInsertElement: on('didInsertElement', function() {
    this._toggleObservers(addObserver);
  }),

  _onWillDestroyElement: on('willDestroyElement', function() {
    this._toggleObservers(removeObserver);
  })
});
