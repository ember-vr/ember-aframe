import AFrame from 'aframe';

const { components } = AFrame;

export const conflictedComponents = ['layout'];

function filter(components) {
  return components.filter(c => !conflictedComponents.includes(c));
}

const discoveredComponents = Object.keys(components).sort();
const defaultComponents = filter(discoveredComponents);

export {
  discoveredComponents,
  defaultComponents
};
