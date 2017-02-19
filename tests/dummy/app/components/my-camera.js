import ACamera from 'ember-a-frame/components/a-camera';
import { tag, sum } from 'ember-awesome-macros';
import { task, timeout } from 'ember-concurrency';
// import computed from 'ember-macro-helpers/computed';

export default ACamera.extend({
  rotation: tag`${'rotX'} ${'rotY'} 0`,
  position: tag`${'posX'} ${sum('posY', 'posYOffset')} ${'posZ'}`,

  initialPosYOffset: 0,
  posYOffset: 0,

  stringify() {
    return AFRAME.components.position.schema.stringify(this.element.getAttribute('position')).trim();
  },

  onLoaded: Ember.on('loaded', function() {
    this.set('_originalPosition', this.stringify());
    this.set('initialPosYOffset', this.element.getAttribute('position').y);
  }),

  cameraMoveTask: task(function * () {
    yield timeout(1000);

    let camera = this.element;
    let { x: rotX, y: rotY } = camera.getAttribute('rotation');
    let { x: posX, y: posY, z: posZ } = camera.getAttribute('position');
    if (this.get('_originalPosition') !== this.stringify()) {
      this.set('posYOffset', this.get('initialPosYOffset'));
    }
    posY -= this.get('initialPosYOffset');
    this.sendAction('cameraMove', {
      rotX,
      rotY,
      posX,
      posY,
      posZ
    });

    this.get('cameraMoveTask').perform();
  }).on('loaded')
});
