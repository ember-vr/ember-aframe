import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import 'aframe';
import 'npm:aframe-animation-component';
import 'npm:aframe-event-set-component';
import 'npm:aframe-layout-component';

// let setAttribute = HTMLElement.prototype.setAttribute;
// HTMLElement.prototype.setAttribute = function() {
//   return setAttribute.apply(this, arguments);
// };

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
