// import AFrame from 'aframe';
import AEntity from 'ember-aframe/components/a-entity';
// import { task } from 'ember-concurrency';
// import anime from 'ember-animejs';
// import parseCoordinates from 'ember-aframe/utils/parse-coordinates';
// import stringifyCoordinates from 'ember-aframe/utils/stringify-coordinates';
// import stringifyComponent from 'ember-aframe/utils/stringify-component';
// import AAttributeObserver from 'ember-aframe/mixins/a-attribute-observer';
import {
  raw,
  // computed,
  not,
  toString
} from 'ember-awesome-macros';
import { readOnly } from '@ember/object/computed';
import stringify from 'ember-aframe/macros/stringify';
import stringifyComponent from 'ember-aframe/macros/stringify-component';

// const WAIT_HERE_FOREVER = Ember.RSVP.defer().promise;

export default AEntity.extend(
  // AAttributeObserver,
{
  'data-test-a-back-button': readOnly('text'),

  classNames: ['link'],

  attributeBindings: [
    // 'animation__hover',
    'a-text:text'
  ],

  init() {
    this._super(...arguments);

    this.setProperties({
      attributesToObserve: {
        position: {
          // action: 'hover'
        }
      }
    });
  },

  // onDidInsertElement: on('didInsertElement', function() {
  //   // let setAttribute = this._setAttribute = this.element.setAttribute;
  //   // this.element.setAttribute = function() {
  //   //   return setAttribute.apply(this, arguments);
  //   // };
  // }),

  // onWillDestroyElement: on('willDestroyElement', function() {
  // }),

  geometry: stringifyComponent('geometry', {
    primitive: raw('plane'),
    height: 1,
    width: 1
  }),
  material: stringifyComponent('material', {
    shader: raw('flat')
  }),
  visible: toString(not('shouldHide')),
  'a-text': stringify({
    value: 'text',
    width: 4,
    color: raw('black'),
    align: raw('center')
  }),

  // animation__hover: stringifyComponent('animation', {
  //   property: raw('position'),
  //   dir: raw('alternate'),
  //   loop: true,
  //   from: stringifyCoordinates(0, -.5, 0),
  //   to: stringifyCoordinates(0, .5, 0)
  // }),

  // animation__hover: computed('position', position => {
  //   if (!position) {
  //     return '';
  //   }

  //   let range = 1;
  //   position = parseCoordinates(position);
  //   position.y -= range / 2;
  //   let from = stringifyCoordinates(position);
  //   position.y += range;
  //   let to = stringifyCoordinates(position);

  //   let animation__hover = {
  //     property: 'position',
  //     dir: 'alternate',
  //     loop: true,
  //     from,
  //     to
  //   };

  //   animation__hover = stringifyComponent('animation', animation__hover);

  //   return animation__hover;
  // }),

  // hover: task(function * (position) {
  //   let self = this;
  //   position.y -= 0.25;
  //   let oldPosition = serializeAttribute(position);
  //   position.y += 0.5;
  //   let newPosition = serializeAttribute(position);
  //
  //   let animation = anime({
  //     // targets: this.element,
  //     // position: [
  //     //   oldPosition,
  //     //   newPosition
  //     // ],
  //     targets: { position: oldPosition },
  //     position: newPosition,
  //     duration: 500,
  //     direction: 'alternate',
  //     easing: 'easeInOutSine',
  //     update() {
  //       Ember.run(() => {
  //         self.set('position', this.targets.position);
  //       });
  //     },
  //     loop: true
  //   });
  //
  //   try {
  //     yield WAIT_HERE_FOREVER;
  //   } finally {
  //     animation.pause();
  //   }
  // }).drop(),

  // actions: {
  //   hover(position) {
  //     this.get('hover').perform(position);
  //   }
  // }
}).reopenClass({
  positionalParams: ['text']
});
