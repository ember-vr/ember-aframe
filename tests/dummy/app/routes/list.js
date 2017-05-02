import Route from 'ember-route';
import EmberObject from 'ember-object';
// import getOwner from 'ember-owner/get';
import get from 'ember-metal/get';
import { defaultComponents } from 'ember-aframe/utils/components';
import { defaultAttributes } from 'ember-aframe/utils/attributes';

const modulePrefix = 'ember-aframe/components/';

export default Route.extend({
  setupController(controller) {
    this._super(...arguments);

    // let owner = getOwner(this);
    // let registrations = Object.keys(owner.application.__registry__.registrations);
    // let registeredComponents = registrations.filter(registration => {
    //   return registration.indexOf('component:a-') === 0;
    // });

    // controller.set('registeredComponents', registeredComponents.map(registration => {
    //   let { attributeBindings } = owner.lookup(registration);
    //   return EmberObject.create({
    //     tagName: registration.substr(10),
    //     nonDefaultAttributeBindings: attributeBindings.filter(attribute => {
    //       return !defaultComponents.includes(attribute) && !defaultAttributes.includes(attribute);
    //     })
    //   });
    // }));

    let componentModules = Object.keys(requirejs._eak_seen).filter(module => {
      return module.indexOf(`${modulePrefix}a-`) === 0;
    });

    controller.set('components', componentModules.map(componentModule => {
      let componentDefinition = requirejs(componentModule).default;
      let component = componentDefinition.create({
        renderer: {}
      });
      let attributeBindings = get(component, 'attributeBindings');
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
