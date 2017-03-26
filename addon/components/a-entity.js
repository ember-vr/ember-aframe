import Component from 'ember-component';
import get from 'ember-metal/get';
import on from 'ember-evented/on';
import { scheduleOnce } from 'ember-runloop';
import { addObserver, removeObserver } from 'ember-metal/observer';
import { task, waitForEvent } from 'ember-concurrency';
import { defaultAttributes } from '../utils/attributes';
import { defaultComponents } from '../utils/components';

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
  attributeBindings: defaultAttributes.concat(defaultComponents).sort(),

  _setUpEvents: task(function * () {
    yield waitForEvent(this.$(), 'loaded');
    this.trigger('loaded');
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
