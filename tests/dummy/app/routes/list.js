import Route from 'ember-route';
import EmberObject from 'ember-object';
import getOwner from 'ember-owner/get';
import { defaultComponents } from 'ember-a-frame/utils/components';

export default Route.extend({
  setupController(controller) {
    this._super(...arguments);

    let owner = getOwner(this);
    let registrations = Object.keys(owner.application.__registry__.registrations);
    let registeredComponents = registrations.filter(registration => {
      return registration.indexOf('component:a-') === 0;
    });

    controller.set('registeredComponents', registeredComponents.map(registration => {
      let { attributeBindings } = owner.lookup(registration);
      return EmberObject.create({
        tagName: registration.substr(10),
        nonDefaultAttributeBindings: attributeBindings.filter(attribute => {
          return !defaultComponents.includes(attribute);
        })
      });
    }));
  }
});
