'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    fingerprint: {
      exclude: ['**/*.jpg']
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('node_modules/aframe-animation-component/dist/aframe-animation-component.js');
  app.import('node_modules/aframe-event-set-component/dist/aframe-event-set-component.js');
  app.import('node_modules/aframe-layout-component/dist/aframe-layout-component.js');

  return app.toTree();
};
