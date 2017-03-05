import Controller from 'ember-controller';
import injectService from 'ember-service/inject';
import { readOnly } from 'ember-computed';
import observer from 'ember-metal/observer';
import get from 'ember-metal/get';
import raw from 'ember-macro-helpers/raw';
import { eq } from 'ember-awesome-macros';
import ENV from '../config/environment';

// from https://github.com/aframevr/aframe/blob/master/src/constants/index.js#L3
// https://github.com/aframevr/aframe/pull/2418
// const DEFAULT_CAMERA_HEIGHT = 1.6;

const { rootURL } = ENV;

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

  rootURL,

  shouldHideBackButton: eq('currentRouteName', raw('index')),

  otherPeople: readOnly('people.otherPeople'),

  updateRoute: observer('currentRouteName', function() {
    get(this, 'people').updateRoute(get(this, 'currentRouteName'));
  }),

  actions: {
    updateQueryParams(params) {
      this.setProperties(params);
    },
    sendData(params) {
      get(this, 'people').updateLocation(params);
    }
  }
});
