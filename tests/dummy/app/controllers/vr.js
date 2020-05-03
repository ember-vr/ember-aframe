import Controller from '@ember/controller';
// eslint-disable-next-line ember/no-mixins
import QueryParamsControllerMixin from 'ember-aframe-camera-extras/mixins/query-params-controller';
import { inject as injectService } from '@ember/service';
import { readOnly } from '@ember/object/computed';
import { on } from '@ember/object/evented';
import { observer } from '@ember/object'; // eslint-disable-line ember/no-observers
import { eq, raw } from 'ember-awesome-macros';

// from https://github.com/aframevr/aframe/blob/master/src/constants/index.js#L3
// https://github.com/aframevr/aframe/pull/2418
// const DEFAULT_CAMERA_HEIGHT = 1.6;

export default Controller.extend(QueryParamsControllerMixin, {
  people: injectService(),
  router: injectService(),

  queryParams: {
    _multiplayer: 'multiplayer'
  },

  _multiplayer: true,

  currentRouteName: readOnly('router.currentRouteName'),

  shouldHideBackButton: eq('currentRouteName', raw('vr.index')),

  otherPeople: readOnly('people.otherPeople'),

  updateRoute: on('init', observer('currentRouteName', function() { // eslint-disable-line ember/no-observers
    let { currentRouteName } = this;
    if (!currentRouteName) {
      return;
    }

    if (this._multiplayer) {
      this.people.updateRoute(currentRouteName);
    }
  })),

  actions: {
    sendData(params) {
      if (this._multiplayer) {
        this.people.updateLocation(params);
      }
    }
  }
});
