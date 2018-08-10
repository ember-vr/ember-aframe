import AFrame from 'aframe';
import toObject from './to-object';

const { components } = AFrame;

export default function stringifyComponent(component, hash) {
  return components[component].stringify(toObject(hash));
}
