import AEntity from 'ember-a-frame/components/a-entity';
import { task } from 'ember-concurrency';
import anime from 'ember-animejs';
import computed from 'ember-macro-helpers/computed';
import toAStr from 'ember-a-frame/utils/to-a-str';
import AAttributeObserver from 'ember-a-frame/mixins/a-attribute-observer';
import raw from 'ember-macro-helpers/raw';
import { conditional } from 'ember-awesome-macros';

const WAIT_HERE_FOREVER = Ember.RSVP.defer().promise;

const serializeAttribute = AFRAME.components.position.schema.stringify;

export default AEntity.extend({
  attributeBindings: [
    // 'animation__hover'
  ],

  attributesToObserve: {
    position: {
      action: 'hover'
    }
  },

  geometry: 'primitive: plane; height: 1; width: 1',
  material: conditional('shouldHide', raw('opacity: 0'), raw('shader: flat')),

  // animation__hover: computed('position', position => {
  //   if (!position) {
  //     return '';
  //   }

  //   position = position.split(' ');
  //   return toAStr({
  //     property: 'position',
  //     dir: 'alternate',
  //     loop: true,
  //     from: `${position[0]} ${position[1] - .5} ${position[2]}`,
  //     to: `${position[0]} ${position[1] + .5} ${position[2]}`
  //   });
  // }),

  hover: task(function * (position) {
    let self = this;
    position.y -= .25;
    let oldPosition = serializeAttribute(position);
    position.y += .5;
    let newPosition = serializeAttribute(position);

    let animation = anime({
      // targets: this.element,
      // position: [
      //   oldPosition,
      //   newPosition
      // ],
      targets: { position: oldPosition },
      position: newPosition,
      duration: 500,
      direction: 'alternate',
      easing: 'easeInOutSine',
      update() {
        Ember.run(() => {
          self.set('position', this.targets.position);
        });
      },
      loop: true
    });

    try {
      yield WAIT_HERE_FOREVER;
    } finally {
      animation.pause();
    }
  }).drop(),

  actions: {
    hover(position) {
      this.get('hover').perform(position);
    }
  }
});
