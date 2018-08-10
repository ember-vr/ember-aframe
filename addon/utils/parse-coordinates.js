import AFrame from 'aframe';

const { parse } = AFrame.utils.coordinates;

export default function parseCoordinates() {
  return parse(...arguments);
}
