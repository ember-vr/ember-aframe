import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

// let setAttribute = HTMLElement.prototype.setAttribute;
// HTMLElement.prototype.setAttribute = function() {
//   return setAttribute.apply(this, arguments);
// };

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
