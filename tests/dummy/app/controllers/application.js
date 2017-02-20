import Ember from 'ember';
import raw from 'ember-macro-helpers/raw';
import { eq } from 'ember-awesome-macros';

const linksY = 3;
const hoverRange = 0.25;
const linksHoverTop = linksY + hoverRange;
const linksHoverBottom = linksY - hoverRange;

// from https://github.com/aframevr/aframe/blob/master/src/constants/index.js#L3
const DEFAULT_CAMERA_HEIGHT = 1.6;

export default Ember.Controller.extend({
  people: Ember.inject.service(),

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

  linksHoverTop,
  linksHoverBottom,

  shouldHideBackButton: eq('currentRouteName', raw('index')),

  otherPeople: Ember.computed.readOnly('people.otherPeople'),

  actions: {
    updateQueryParams(params) {
      this.setProperties(params);
    },
    sendData(params) {
      this.get('people').updateLocation(params);
    }
  }
});
