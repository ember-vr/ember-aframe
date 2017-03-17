import ACamera from 'ember-a-frame/components/a-camera';
import on from 'ember-enevted/on';
import { tag, sum } from 'ember-awesome-macros';
import { task, timeout } from 'ember-concurrency';
// import computed from 'ember-macro-helpers/computed';
import stringifyCoordinates from 'ember-a-frame/utils/stringify-coordinates';

export default ACamera.extend({
  rotation: tag`${'rotX'} ${'rotY'} 0`,
  position: tag`${'posX'} ${sum('posY', 'posYOffset')} ${'posZ'}`,

  initialPosYOffset: 0,
  posYOffset: 0,

  stringify() {
    return stringifyCoordinates(this.element.getAttribute('position')).trim();
  },

  onLoaded: on('loaded', function() {
    this.set('_originalPosition', this.stringify());
    this.set('initialPosYOffset', this.element.getAttribute('position').y);
  }),

  haveIMoved(prevParamsKey, params) {
    let prevParams = this.get(prevParamsKey);
    if (!prevParams) {
      prevParams = {};
    }
    let didIMove = params.rotX !== prevParams.rotX
      || params.rotY !== prevParams.rotY
      || params.posX !== prevParams.posX
      || params.posY !== prevParams.posY
      || params.posZ !== prevParams.posZ;
    this.set(prevParamsKey, {
      rotX: params.rotX,
      rotY: params.rotY,
      posX: params.posX,
      posY: params.posY,
      posZ: params.posZ
    });
    return didIMove;
  },

  cameraMoveFastTask: task(function * () {
    yield timeout(10);

    let camera = this.element;
    let { x: rotX, y: rotY } = camera.getAttribute('rotation');
    let { x: posX, y: posY, z: posZ } = camera.getAttribute('position');
    let params = {
      rotX,
      rotY,
      posX,
      posY,
      posZ
    };

    let didIMove = this.haveIMoved('fastParams', params);
    if (didIMove) {
      this.sendAction('cameraMoveFast', params);
    }

    this.set('params', params);

    this.get('cameraMoveFastTask').perform();
  }).on('loaded'),

  cameraMoveSlowTask: task(function * () {
    yield timeout(1000);

    if (this.get('_originalPosition') !== this.stringify()) {
      this.set('posYOffset', this.get('initialPosYOffset'));
    }

    let params = this.get('params');

    params.posY -= this.get('initialPosYOffset');

    let didIMove = this.haveIMoved('slowParams', params);
    if (didIMove) {
      this.sendAction('cameraMoveSlow', params);
    }

    this.get('cameraMoveSlowTask').perform();
  }).on('loaded')
});
