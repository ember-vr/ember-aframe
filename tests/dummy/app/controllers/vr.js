import Controller from '@ember/controller';
import QueryParamsControllerMixin from 'ember-aframe-camera-extras/mixins/query-params-controller';
import { inject as injectService } from '@ember/service';
import { inject as injectController } from '@ember/controller';
import { readOnly } from '@ember/object/computed';
import { on } from '@ember/object/evented';
import { observer } from '@ember/object';
import { get } from '@ember/object';
import { eq, raw } from 'ember-awesome-macros';

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
