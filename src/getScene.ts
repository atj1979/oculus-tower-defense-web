import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const cube = new THREE.Mesh(geometry, material);
cube.onAfterRender = () => {
  const rotateSpeed = 0.01;
  cube.rotateX(rotateSpeed);
  cube.rotateY(rotateSpeed);
  cube.rotateZ(rotateSpeed / 2);
};

scene.add(cube);

export const getSceneAndCamera = () => {
  return { scene, camera };
};
