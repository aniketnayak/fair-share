import * as THREE from 'three';

export function createScene(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();

  // ── Sky gradient ──────────────────────────────────────────────────────
  scene.background = new THREE.Color(0x87ceeb);
  scene.fog = new THREE.FogExp2(0xc8dff0, 0.018);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    200
  );
  camera.position.set(0, 2.5, 4.5);
  camera.lookAt(0, 0.5, 0);

  // ── Lighting — warm sunny day ─────────────────────────────────────────
  const ambient = new THREE.AmbientLight(0xb0d0ff, 0.6);
  scene.add(ambient);

  // Sun
  const sun = new THREE.DirectionalLight(0xfff0d0, 1.8);
  sun.position.set(8, 12, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -10;
  sun.shadow.camera.right = 10;
  sun.shadow.camera.top = 10;
  sun.shadow.camera.bottom = -10;
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = 30;
  sun.shadow.bias = -0.001;
  scene.add(sun);

  // Warm fill from the side
  const fill = new THREE.DirectionalLight(0xffe8c0, 0.4);
  fill.position.set(-4, 3, -2);
  scene.add(fill);

  // ── Ground plane (grass) ──────────────────────────────────────────────
  const grassGeo = new THREE.PlaneGeometry(80, 80);
  const grassMat = new THREE.MeshStandardMaterial({
    color: 0x4a8c3f,
    roughness: 0.9,
    metalness: 0.0,
  });
  const grass = new THREE.Mesh(grassGeo, grassMat);
  grass.rotation.x = -Math.PI / 2;
  grass.position.y = -1.2;
  grass.receiveShadow = true;
  scene.add(grass);

  // ── Picnic table ──────────────────────────────────────────────────────
  const table = buildPicnicTable();
  table.position.set(0, -1.2, 0);
  scene.add(table);

  // ── Background trees ─────────────────────────────────────────────────
  const treePositions = [
    [-8, 0, -10], [-5, 0, -14], [0, 0, -16], [6, 0, -12],
    [10, 0, -14], [-12, 0, -8], [13, 0, -10], [-3, 0, -18],
    [9, 0, -18], [-10, 0, -16],
  ];
  for (const [x, , z] of treePositions) {
    const tree = buildTree(0.8 + Math.random() * 0.6);
    tree.position.set(x, -1.2, z);
    tree.castShadow = true;
    scene.add(tree);
  }

  // ── Picnic blanket ────────────────────────────────────────────────────
  const blanketGeo = new THREE.PlaneGeometry(3.5, 2.5);
  const blanketMat = new THREE.MeshStandardMaterial({
    color: 0xcc4444,
    roughness: 0.95,
    metalness: 0.0,
  });
  const blanket = new THREE.Mesh(blanketGeo, blanketMat);
  blanket.rotation.x = -Math.PI / 2;
  blanket.position.set(-4.5, -1.19, 2);
  blanket.rotation.z = 0.3;
  blanket.receiveShadow = true;
  scene.add(blanket);

  // Checkerboard stripes on blanket (thin overlay strips)
  for (let i = 0; i < 5; i++) {
    const stripeGeo = new THREE.PlaneGeometry(3.5, 0.25);
    const stripeMat = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      roughness: 0.95,
    });
    const stripe = new THREE.Mesh(stripeGeo, stripeMat);
    stripe.rotation.x = -Math.PI / 2;
    stripe.position.set(-4.5, -1.185, 2 + (i - 2) * 0.5);
    stripe.rotation.z = 0.3;
    scene.add(stripe);
  }

  // ── Sky dome (hemisphere) ─────────────────────────────────────────────
  const skyGeo = new THREE.SphereGeometry(80, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      topColor: { value: new THREE.Color(0x4a90d9) },
      bottomColor: { value: new THREE.Color(0xc8e0f0) },
    },
    vertexShader: `
      varying float vY;
      void main() {
        vY = normalize(position).y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      varying float vY;
      void main() {
        float t = pow(max(vY, 0.0), 0.6);
        gl_FragColor = vec4(mix(bottomColor, topColor, t), 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.position.y = -1.2;
  scene.add(sky);

  // ── Clouds (flat billboard sprites) ───────────────────────────────────
  for (let i = 0; i < 8; i++) {
    const cloud = buildCloud();
    cloud.position.set(
      (Math.random() - 0.5) * 60,
      18 + Math.random() * 10,
      -20 - Math.random() * 30
    );
    cloud.scale.setScalar(3 + Math.random() * 4);
    scene.add(cloud);
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { renderer, scene, camera };
}

// ── Picnic table builder ──────────────────────────────────────────────────

function buildPicnicTable() {
  const group = new THREE.Group();
  const woodColor = 0x8B6914;
  const woodMat = new THREE.MeshStandardMaterial({
    color: woodColor,
    roughness: 0.85,
    metalness: 0.0,
  });

  // Table top — planks
  const tableY = 0.75;
  for (let i = 0; i < 5; i++) {
    const plank = new THREE.Mesh(
      new THREE.BoxGeometry(3.0, 0.06, 0.28),
      woodMat
    );
    plank.position.set(0, tableY, -0.56 + i * 0.29);
    plank.castShadow = true;
    plank.receiveShadow = true;
    group.add(plank);
  }

  // Support beams under table (cross)
  for (const z of [-0.2, 0.2]) {
    const beam = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.06, 0.08),
      woodMat
    );
    beam.position.set(0, tableY - 0.05, z);
    group.add(beam);
  }

  // Legs (A-frame style)
  const legMat = woodMat;
  for (const xSign of [-1, 1]) {
    const x = xSign * 1.0;

    // Main leg
    const leg = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.85, 0.06),
      legMat
    );
    leg.position.set(x, tableY - 0.45, 0);
    leg.rotation.z = xSign * 0.15;
    leg.castShadow = true;
    group.add(leg);

    // Bench plank
    const bench = new THREE.Mesh(
      new THREE.BoxGeometry(3.0, 0.06, 0.3),
      woodMat
    );
    bench.position.set(0, tableY - 0.35, xSign * 0.65);
    bench.castShadow = true;
    bench.receiveShadow = true;
    group.add(bench);

    // Bench leg
    const benchLeg = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.45, 0.06),
      legMat
    );
    benchLeg.position.set(x, tableY - 0.6, xSign * 0.65);
    benchLeg.rotation.z = xSign * 0.12;
    benchLeg.castShadow = true;
    group.add(benchLeg);
  }

  return group;
}

// ── Tree builder ──────────────────────────────────────────────────────────

function buildTree(scale = 1) {
  const group = new THREE.Group();

  // Trunk
  const trunkGeo = new THREE.CylinderGeometry(0.15 * scale, 0.2 * scale, 2.0 * scale, 8);
  const trunkMat = new THREE.MeshStandardMaterial({
    color: 0x6b4226,
    roughness: 0.9,
  });
  const trunk = new THREE.Mesh(trunkGeo, trunkMat);
  trunk.position.y = 1.0 * scale;
  trunk.castShadow = true;
  group.add(trunk);

  // Foliage — stacked cones
  const foliageMat = new THREE.MeshStandardMaterial({
    color: 0x2d7a2d,
    roughness: 0.85,
  });

  const layers = [
    { y: 2.2, r: 1.1, h: 1.4 },
    { y: 3.0, r: 0.85, h: 1.2 },
    { y: 3.7, r: 0.6, h: 1.0 },
  ];

  for (const { y, r, h } of layers) {
    const coneGeo = new THREE.ConeGeometry(r * scale, h * scale, 8);
    const cone = new THREE.Mesh(coneGeo, foliageMat);
    cone.position.y = y * scale;
    cone.castShadow = true;
    group.add(cone);
  }

  return group;
}

// ── Cloud builder ─────────────────────────────────────────────────────────

function buildCloud() {
  const group = new THREE.Group();
  const cloudMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 1.0,
    metalness: 0.0,
    transparent: true,
    opacity: 0.85,
  });

  const puffs = [
    { x: 0, y: 0, z: 0, r: 0.5 },
    { x: 0.4, y: 0.1, z: 0, r: 0.4 },
    { x: -0.35, y: 0.05, z: 0.1, r: 0.35 },
    { x: 0.15, y: 0.15, z: -0.1, r: 0.3 },
    { x: -0.1, y: -0.05, z: 0.15, r: 0.25 },
  ];

  for (const { x, y, z, r } of puffs) {
    const puffGeo = new THREE.SphereGeometry(r, 8, 6);
    const puff = new THREE.Mesh(puffGeo, cloudMat);
    puff.position.set(x, y, z);
    group.add(puff);
  }

  return group;
}
