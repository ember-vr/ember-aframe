import Component from '@ember/component';
import { get } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import { addObserver, removeObserver } from '@ember/object/observers';
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
      func(this, attribute.substr(0, attribute.indexOf(':')), this, playAfterChange);
    });
  },

  didInsertElement() {
    this._super(...arguments);

    this._toggleObservers(addObserver);
  },

  willDestroyElement() {
    this._super(...arguments);

    this._toggleObservers(removeObserver);
  }
});
