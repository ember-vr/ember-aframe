import AFrame from 'aframe';

export default function stringifyComponent(component, hash) {
  return AFrame.components[component].stringify(hash);
}
