import Controller from 'ember-controller';
import QueryParamsControllerMixin from 'ember-aframe-camera-extras/mixins/query-params-controller';
import injectService from 'ember-service/inject';
import injectController from 'ember-controller/inject';
import { readOnly } from 'ember-computed';
import on from 'ember-evented/on';
import observer from 'ember-metal/observer';
import get from 'ember-metal/get';
import raw from 'ember-macro-helpers/raw';
import { eq } from 'ember-awesome-macros';

// from https://github.com/aframevr/aframe/blob/master/src/constants/index.js#L3
// https://github.com/aframevr/aframe/pull/2418
// const DEFAULT_CAMERA_HEIGHT = 1.6;

export default Controller.extend(QueryParamsControllerMixin, {
  people: injectService(),
  application: injectController(),

  currentRouteName: readOnly('application.currentRouteName'),

  shouldHideBackButton: eq('currentRouteName', raw('vr.index')),

  otherPeople: readOnly('people.otherPeople'),

  updateRoute: on('init', observer('currentRouteName', function() {
    let currentRouteName = get(this, 'currentRouteName');
    if (!currentRouteName) {
      return;
    }

    get(this, 'people').updateRoute(currentRouteName);
  })),

  actions: {
    sendData(params) {
      get(this, 'people').updateLocation(params);
    }
  }
});
