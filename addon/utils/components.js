import AFrame from 'aframe';

const { components } = AFrame;

const conflictedComponents = ['layout'];

function filter(components) {
  return components.filter(c => !conflictedComponents.includes(c));
}

const discoveredComponents = Object.keys(components).sort();
const defaultComponents = filter(discoveredComponents);

export { discoveredComponents };
export { conflictedComponents };
export { defaultComponents };
