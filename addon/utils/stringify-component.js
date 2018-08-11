import AFrame from 'aframe';

const { components } = AFrame;

export default function stringifyComponent(component, hash) {
  return components[component].stringify(hash);
}
