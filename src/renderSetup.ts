import * as THREE from "three";

import { VRButton } from "three/examples/jsm/Addons.js";

export const rendererSetup = (
  parentElement?: HTMLElement
): THREE.WebGLRenderer => {
  if (!parentElement) parentElement = document.body;

  const renderer = new THREE.WebGLRenderer();
  renderer.xr.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  parentElement.appendChild(renderer.domElement);
  parentElement.appendChild(VRButton.createButton(renderer));

  return renderer;
};
