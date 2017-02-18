import Ember from 'ember';
import raw from 'ember-macro-helpers/raw';
import { neq } from 'ember-awesome-macros';

export default Ember.Controller.extend({
  queryParams: [
    'rotX',
    'rotY'
  ],

  rotX: 0,
  rotY: 0,

  // shouldShowBackButton: neq('currentRouteName', raw('index'))
});
