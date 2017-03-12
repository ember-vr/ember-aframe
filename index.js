/* jshint node: true */
'use strict';

const writeFile = require('broccoli-file-creator');
const mergeTrees = require('broccoli-merge-trees');

const primitiveDefinitions = {};
let defaultAttributes;
let aframe;

function runAFrame() {
  const jsdom = require('jsdom');

  let _window = global.window = jsdom.jsdom().defaultView;
  global.navigator = _window.navigator;
  global.document = _window.document;
  global.HTMLElement = _window.HTMLElement;
  Object.defineProperty(_window, 'WebVRConfig', {
    get () {
      return global.WebVRConfig;
    },
    set (WebVRConfig) {
      global.WebVRConfig = WebVRConfig;
    }
  });

  const primitives = require('aframe/src/extras/primitives/primitives');

  const registerPrimitive = primitives.registerPrimitive;

  primitives.registerPrimitive = function(name, definition) {
    primitiveDefinitions[name] = definition;
    return registerPrimitive.apply(this, arguments);
  };

  aframe = require('aframe/src');

  primitives.registerPrimitive = registerPrimitive;

  const propertyTypes = require('aframe/src/core/propertyTypes').propertyTypes;

  defaultAttributes = JSON.stringify(Object.keys(propertyTypes));

  delete global.window;
  delete global.document;
  delete global.HTMLElement;
  delete global.WebVRConfig;
}

module.exports = {
  name: 'ember-a-frame',

  // included() {
  //   return this._super.included.apply(this, arguments);
  // },

  treeForAddon(tree) {
    tree = this._super.treeForAddon.apply(this, arguments);

    let trees = [tree];

    runAFrame();

    trees.push(writeFile('modules/ember-a-frame/utils/attributes.js', `
      const defaultAttributes = ${defaultAttributes};

      export { defaultAttributes };
    `));

    Object.keys(aframe.primitives.primitives).forEach(name => {
      let attributeBindings = [];
      let definition = primitiveDefinitions[name];
      let defaultComponents = definition.defaultComponents;
      if (defaultComponents) {
        let geometry = defaultComponents.geometry;
        if (geometry) {
          let primitive = geometry.primitive;
          if (primitive) {
            attributeBindings = Object.keys(aframe.geometries[primitive].schema);
          }
        }
      }
      attributeBindings = JSON.stringify(attributeBindings);
      trees.push(writeFile(`modules/ember-a-frame/components/${name}.js`, `
        import AEntity from './a-entity';

        export default AEntity.extend({
          tagName: '${name}',
          attributeBindings: ${attributeBindings}
        });
      `));
      trees.push(writeFile(`modules/${this.app.name}/components/${name}.js`, `
        export { default } from 'ember-a-frame/components/${name}';
      `));
    });

    return mergeTrees(trees);
  }
};
