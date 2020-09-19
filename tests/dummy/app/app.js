import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'dummy/config/environment';

// let setAttribute = HTMLElement.prototype.setAttribute;
// HTMLElement.prototype.setAttribute = function() {
//   return setAttribute.apply(this, arguments);
// };

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
