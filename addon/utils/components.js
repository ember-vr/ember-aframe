import AFrame from 'aframe';

const { components } = AFrame;

const discoveredComponents = Object.keys(components).sort();
const conflictedComponents = ['layout'];
const defaultComponents = discoveredComponents.filter(c => !conflictedComponents.includes(c));

export { discoveredComponents };
export { conflictedComponents };
export { defaultComponents };
