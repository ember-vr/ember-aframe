/* global requirejs */

import Component from '@ember/component';
import EmberObject from '@ember/object';
import { defaultComponents } from 'ember-aframe/utils/components';
import { defaultAttributes } from 'ember-aframe/utils/attributes';

const modulePrefix = 'ember-aframe/components/';

export default Component.extend({
  init() {
    this._super(...arguments);

    let componentModules = Object.keys(requirejs._eak_seen).filter(module => {
      return module.indexOf(`${modulePrefix}a-`) === 0;
    });

    this.set('components', componentModules.map(componentModule => {
      let componentDefinition = requirejs(componentModule).default;
      let { attributeBindings } = componentDefinition.create({
        renderer: {}
      });
      let nonDefaultAttributeBindings = attributeBindings.filter(attribute => {
        return !defaultComponents.includes(attribute) && !defaultAttributes.includes(attribute);
      });
      return EmberObject.create({
        tagName: componentModule.substr(modulePrefix.length),
        nonDefaultAttributeBindings,
        shouldHideToggle: !nonDefaultAttributeBindings.length
      });
    }));
  }
});
