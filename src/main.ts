import { getSceneAndCamera } from "./getScene";
import { rendererSetup } from "./renderSetup";

const renderer = rendererSetup();

function animate() {
  const { scene, camera } = getSceneAndCamera();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
