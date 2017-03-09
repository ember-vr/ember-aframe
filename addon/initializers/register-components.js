// import AFrame from 'aframe';
// import AEntity from '../components/a-entity';
// import { camelize, dasherize } from 'ember-string';
// import { defaultAttributes } from '../utils/attributes';

// const { components, geometries } = AFrame;

export function initialize(application) {
  // Object.keys(AFrame.primitives.primitives).sort().forEach(primitive => {
  //   let fullName = `component:${primitive}`;
  //   if (application.hasRegistration(fullName)) {
  //     return;
  //   }

  //   let attributeBindings = defaultAttributes;
  //   let camelized = camelize(primitive.substr(2));

  //   let component = components[camelized];
  //   if (component) {
  //     let { schema } = component;
  //     attributeBindings = attributeBindings.concat(Object.keys(schema).sort());
  //   }

  //   let geometry = geometries[camelized];
  //   if (geometry) {
  //     let { schema } = geometry;
  //     attributeBindings = attributeBindings.concat(Object.keys(schema).sort().map(dasherize));
  //   }

  //   let Component = AEntity.extend({
  //     tagName: primitive,
  //     attributeBindings
  //   });
  //   application.register(fullName, Component);
  // });
}

export default {
  name: 'register-components',
  initialize
};
