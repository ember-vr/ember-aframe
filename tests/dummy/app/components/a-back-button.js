// import AFrame from 'aframe';
import AEntity from 'ember-aframe/components/a-entity';
// import { task } from 'ember-concurrency';
// import anime from 'ember-animejs';
// import parseCoordinates from 'ember-aframe/utils/parse-coordinates';
// import stringifyCoordinates from 'ember-aframe/utils/stringify-coordinates';
// import stringifyComponent from 'ember-aframe/utils/stringify-component';
import AAttributeObserver from 'ember-aframe/mixins/a-attribute-observer';
import {
  // raw,
  // computed,
  not,
  tag,
  toString
} from 'ember-awesome-macros';

// const WAIT_HERE_FOREVER = Ember.RSVP.defer().promise;

const MyComponent = AEntity.extend(
  AAttributeObserver,
{
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

  geometry: 'primitive: plane; height: 1; width: 1',
  material: 'shader: flat',
  visible: toString(not('shouldHide')),
  'a-text': tag`value: ${'text'}; width: 4; color: black; align: center`,

  // animation__hover: stringifyComponent('animation', {
  //   property: 'position',
  //   dir: 'alternate',
  //   loop: true,
  //   from: '0 -.5 0',
  //   to: '0 .5 0'
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
});

MyComponent.reopenClass({
  positionalParams: ['text']
});

export default MyComponent;
