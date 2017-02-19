import Ember from 'ember';
import raw from 'ember-macro-helpers/raw';
import { eq } from 'ember-awesome-macros';

const linksY = 4.5;
const hoverRange = 0.25;
const linksHoverTop = linksY + hoverRange;
const linksHoverBottom = linksY - hoverRange;

export default Ember.Controller.extend({
  queryParams: [
    'rotX',
    'rotY'
  ],

  rotX: 0,
  rotY: 0,

  linksHoverTop,
  linksHoverBottom,

  shouldHideBackButton: eq('currentRouteName', raw('index'))
});
