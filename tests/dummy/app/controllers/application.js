import Controller from 'ember-controller';
import injectService from 'ember-service/inject';
import { readOnly } from 'ember-computed';
import observer from 'ember-metal/observer';
import raw from 'ember-macro-helpers/raw';
import { eq } from 'ember-awesome-macros';

// from https://github.com/aframevr/aframe/blob/master/src/constants/index.js#L3
// https://github.com/aframevr/aframe/pull/2418
// const DEFAULT_CAMERA_HEIGHT = 1.6;

export default Controller.extend({
  people: injectService(),

  queryParams: [
    'rotX',
    'rotY',
    'posX',
    'posY',
    'posZ'
  ],

  rotX: 0,
  rotY: 0,
  posX: 0,
  posY: 0,
  posZ: 0,

  shouldHideBackButton: eq('currentRouteName', raw('index')),

  otherPeople: readOnly('people.otherPeople'),

  updateRoute: observer('currentRouteName', function() {
    this.get('people').updateRoute(this.get('currentRouteName'));
  }),

  actions: {
    updateQueryParams(params) {
      this.setProperties(params);
    },
    sendData(params) {
      this.get('people').updateLocation(params);
    }
  }
});
