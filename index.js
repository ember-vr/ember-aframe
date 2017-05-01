/* eslint-env node */
'use strict';

const writeFile = require('broccoli-file-creator');
const mergeTrees = require('broccoli-merge-trees');

const primitiveDefinitions = {};
let defaultAttributes;
let aframe;

function runAFrame() {
  const dasherize = require('ember-cli-string-utils').dasherize;
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

  defaultAttributes = JSON.stringify(Object.keys(propertyTypes).map(dasherize));

  delete global.window;
  delete global.document;
  delete global.HTMLElement;
  delete global.WebVRConfig;
}

module.exports = {
  name: 'ember-a-frame',

  included() {
    runAFrame();

    return this._super.included.apply(this, arguments);
  },

  treeForAddon(tree) {
    let trees = [tree];

    trees.push(writeFile('utils/attributes.js', `
      const defaultAttributes = ${defaultAttributes};

      export { defaultAttributes };
    `));

    Object.keys(aframe.primitives.primitives).forEach(name => {
      let attributeBindings = [];
      let definition = primitiveDefinitions[name];
      // let defaultComponents = definition.defaultComponents;
      // if (defaultComponents) {
      //   let geometry = defaultComponents.geometry;
      //   if (geometry) {
      //     let primitive = geometry.primitive;
      //     if (primitive) {
      //       attributeBindings = Object.keys(aframe.geometries[primitive].schema);
      //     }
      //   }
      // }
      let mappings = definition.mappings;
      if (mappings) {
        attributeBindings = Object.keys(mappings).sort();
      }
      attributeBindings = JSON.stringify(attributeBindings);
      trees.push(writeFile(`components/${name}.js`, `
        import AEntity from './a-entity';

        export default AEntity.extend({
          tagName: '${name}',
          attributeBindings: ${attributeBindings}
        });
      `));
    });

    tree = mergeTrees(trees);

    tree = this._super.treeForAddon.call(this, tree);

    return tree;
  },

  treeForApp(tree) {
    tree = this._super.treeForApp.call(this, tree);

    let trees = [tree];

    Object.keys(aframe.primitives.primitives).forEach(name => {
      trees.push(writeFile(`components/${name}.js`, `
        export { default } from 'ember-a-frame/components/${name}';
      `));
    });

    tree = mergeTrees(trees);

    return tree;
  }
};
