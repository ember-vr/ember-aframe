import Ember from 'ember';
import raw from 'ember-macro-helpers/raw';
import { eq } from 'ember-awesome-macros';

export default Ember.Controller.extend({
  queryParams: [
    'rotX',
    'rotY'
  ],

  rotX: 0,
  rotY: 0,

  shouldHideBackButton: eq('currentRouteName', raw('index'))
});
