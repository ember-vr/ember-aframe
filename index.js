/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-a-frame',

  contentFor(type) {
    if (type === 'head-footer') {
      return `
<script src="https://aframe.io/releases/0.5.0/aframe.js"></script>
<script src="https://unpkg.com/aframe-layout-component@^4.0.0/dist/aframe-layout-component.js"></script>
<script src="https://unpkg.com/aframe-event-set-component@^3.0.0/dist/aframe-event-set-component.js"></script>
<script src="https://unpkg.com/aframe-animation-component@3.0.4/dist/aframe-animation-component.js"></script>
`;
    }
  }
};
