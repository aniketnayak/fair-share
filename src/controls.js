import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';

export function setupControls(camera, renderer, cuttingPlane) {
  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true;
  orbit.dampingFactor = 0.08;
  orbit.target.set(0, 0, 0);

  const transform = new TransformControls(camera, renderer.domElement);
  transform.attach(cuttingPlane);
  transform.setMode('translate');
  transform.setSpace('local');
  transform.showX = false;
  transform.showY = false;
  transform.setSize(0.5);

  // Disable orbit while dragging transform gizmo
  transform.addEventListener('dragging-changed', (e) => {
    orbit.enabled = !e.value;
  });

  // Keyboard shortcuts for gizmo mode
  const onKeyDown = (e) => {
    if (e.key === 'r' || e.key === 'R') {
      transform.setMode('rotate');
      transform.showX = true;
      transform.showY = true;
      transform.showZ = true;
    }
    if (e.key === 't' || e.key === 'T') {
      transform.setMode('translate');
      transform.showX = false;
      transform.showY = false;
    }
  };
  window.addEventListener('keydown', onKeyDown);

  function dispose() {
    window.removeEventListener('keydown', onKeyDown);
    orbit.dispose();
    transform.detach();
    transform.dispose();
  }

  return { orbit, transform, dispose };
}
