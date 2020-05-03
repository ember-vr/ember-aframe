import Mixin from '@ember/object/mixin';
import AFrame from 'aframe';
import { task, timeout } from 'ember-concurrency';

// eslint-disable-next-line ember/no-new-mixins
export default Mixin.create({
  // _checkAttributes: task(function * () {
  //   let attributes = this.attributesToObserve;
  //   let observer;

  //   try {
  //     return yield new Ember.RSVP.Promise(resolve => {
  //       observer = new MutationObserver(() => {
  //         // never hits on second didInsertElement
  //         Ember.run(() => {
  //           let isDone = this._iterateAttributes();

  //           if (isDone) {
  //             resolve();
  //           }
  //         });
  //       });

  //       // pass in the target node, as well as the observer options
  //       observer.observe(this.element, { attributeFilter: Object.keys(attributes) });
  //     });
  //   } finally {
  //     observer.disconnect();
  //   }
  // }).on('didInsertElement'),

  _iterateAttributes() {
    let triggeredList = this._triggeredList;
    if (triggeredList === undefined) {
      triggeredList = this._triggeredList = [];
    }
    let attributes = this.attributesToObserve;
    let isDone = true;
    Object.keys(attributes).forEach(attribute => {
      if (triggeredList.includes(attribute)) {
        return;
      }
      let obj = attributes[attribute];
      let el = this.element;
      let value = el.getAttribute(attribute);
      // let value = HTMLElement.prototype.getAttribute.call(el, attribute);
      if (value) {
        if (obj.serializeAttribute) {
          this[attribute] = obj.serializeAttribute.call(this, value);
          // this[attribute] = value;
          this.notifyPropertyChange(attribute);
        } else if (AFrame.components[attribute]) {
          // this[attribute] = AFrame.components[attribute].schema.stringify(value);
          this[attribute] = AFrame.components[attribute].schema.stringify(value);
          this.notifyPropertyChange(attribute);
        }
        triggeredList.push(attribute);
        if (obj.action) {
          this.send(obj.action, value);
        }
        return;
      }
      isDone = false;
    });

    return isDone;
  },

  _checkAttributes: task(function * () {
    let isDone = this._iterateAttributes();

    if (isDone) {
      return;
    }

    yield timeout(1);

    this._checkAttributes.perform();
  }).on('didInsertElement')
});
