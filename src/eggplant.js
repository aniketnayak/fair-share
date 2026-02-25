import * as THREE from 'three';

export function generateEggplant(prng, noise3D) {
  const geo = new THREE.IcosahedronGeometry(1.0, 6);
  geo.deleteAttribute('uv');
  const posAttr = geo.getAttribute('position');

  // Eggplant body: plump pear shape
  const scales = [1, 1, 1];
  const elongAxis = Math.floor(prng() * 3);
  const otherAxes = [0, 1, 2].filter(a => a !== elongAxis);
  scales[elongAxis] = 1.5 + prng() * 0.3;
  for (const a of otherAxes) scales[a] = 0.55 + prng() * 0.15;

  // Taper for pear-like profile
  const taperAxis = elongAxis;
  const taperDir = prng() < 0.5 ? 1 : -1;
  const taperStrength = 0.45 + prng() * 0.20;

  // Bulge boost parameters (fat end expansion)
  const bulgeBoost = 0.10 + prng() * 0.10;

  // Lumps
  const lumpCount = 2 + Math.floor(prng() * 2);
  const lumps = [];
  for (let i = 0; i < lumpCount; i++) {
    const theta = prng() * Math.PI * 2;
    const phi = Math.acos(2 * prng() - 1);
    lumps.push({
      dir: new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      ),
      strength: 0.04 + prng() * 0.06,
      falloff: 2.0 + prng() * 2.0,
    });
  }

  // 0-1 lobes
  const lobeCount = Math.floor(prng() * 2);
  const lobes = [];
  for (let i = 0; i < lobeCount; i++) {
    const theta = prng() * Math.PI * 2;
    const phi = Math.acos(2 * prng() - 1);
    lobes.push({
      dir: new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      ),
      strength: 0.10 + prng() * 0.15,
      falloff: 1.2 + prng() * 1.0,
    });
  }

  // Very smooth — few knobs
  const knobCount = 2 + Math.floor(prng() * 3);
  const knobs = [];
  for (let i = 0; i < knobCount; i++) {
    const theta = prng() * Math.PI * 2;
    const phi = Math.acos(2 * prng() - 1);
    knobs.push({
      dir: new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      ),
      strength: 0.01 + prng() * 0.02,
      falloff: 6.0 + prng() * 6.0,
    });
  }

  const octaves = 2;
  const baseFreq = 0.6;
  const persistence = 0.4;
  const noiseStrength = 0.06;

  for (let i = 0; i < posAttr.count; i++) {
    let x = posAttr.getX(i);
    let y = posAttr.getY(i);
    let z = posAttr.getZ(i);

    x *= scales[0];
    y *= scales[1];
    z *= scales[2];

    // Taper — exponent t^2.0 for pear-like profile
    const coords = [x, y, z];
    const axisVal = coords[taperAxis];
    const t = (axisVal * taperDir + 1) / 2;
    const taperScale = 1.0 - taperStrength * Math.pow(Math.max(0, t), 2.0);

    // Bulge boost at fat end (t < 0.3)
    const bulgeScale = t < 0.3 ? 1.0 + bulgeBoost * (1.0 - t / 0.3) : 1.0;

    for (const a of [0, 1, 2]) {
      if (a !== taperAxis) {
        coords[a] *= Math.max(0.2, taperScale) * bulgeScale;
      }
    }
    x = coords[0];
    y = coords[1];
    z = coords[2];

    const len = Math.sqrt(x * x + y * y + z * z);
    if (len < 0.001) { posAttr.setXYZ(i, x, y, z); continue; }
    const nx = x / len;
    const ny = y / len;
    const nz = z / len;

    let lumpDisp = 0;
    for (const lump of lumps) {
      const dot = nx * lump.dir.x + ny * lump.dir.y + nz * lump.dir.z;
      lumpDisp += lump.strength * Math.pow(Math.max(0, dot), lump.falloff);
    }

    let lobeDisp = 0;
    for (const lobe of lobes) {
      const dot = nx * lobe.dir.x + ny * lobe.dir.y + nz * lobe.dir.z;
      lobeDisp += lobe.strength * Math.pow(Math.max(0, dot), lobe.falloff);
    }

    let knobDisp = 0;
    for (const knob of knobs) {
      const dot = nx * knob.dir.x + ny * knob.dir.y + nz * knob.dir.z;
      knobDisp += knob.strength * Math.pow(Math.max(0, dot), knob.falloff);
    }

    let amp = 1, freq = baseFreq, noiseVal = 0, maxAmp = 0;
    for (let o = 0; o < octaves; o++) {
      noiseVal += amp * noise3D(x * freq, y * freq, z * freq);
      maxAmp += amp;
      amp *= persistence;
      freq *= 2;
    }
    noiseVal /= maxAmp;

    const disp = lumpDisp + lobeDisp + knobDisp + noiseVal * noiseStrength;
    x += nx * disp;
    y += ny * disp;
    z += nz * disp;

    posAttr.setXYZ(i, x, y, z);
  }

  geo.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    color: 0x4A0E4E,
    roughness: 0.25,
    metalness: 0.08,
  });

  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'eggplant';

  // --- Green calyx + stem at the thin/stem end ---
  const calyxMat = new THREE.MeshStandardMaterial({
    color: 0x1B5E20,
    roughness: 0.45,
    metalness: 0.0,
  });

  const calyxGroup = new THREE.Group();

  // Thin end (stem): where t=1, i.e. +taperDir along elongAxis
  const stemDir = new THREE.Vector3();
  stemDir.setComponent(elongAxis, taperDir);
  calyxGroup.position.copy(stemDir.clone().multiplyScalar(scales[elongAxis] * 0.85));

  // Orient group so local +Y points outward (away from body)
  const quat = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0), stemDir
  );
  calyxGroup.quaternion.copy(quat);

  // Small stem cylinder
  const stemGeo = new THREE.CylinderGeometry(0.03, 0.04, 0.2, 6);
  stemGeo.translate(0, 0.1, 0);
  const stemMesh = new THREE.Mesh(stemGeo, calyxMat);
  stemMesh.castShadow = true;
  calyxGroup.add(stemMesh);

  // Sepals radiating outward
  const sepalCount = 4 + Math.floor(prng() * 2);
  for (let i = 0; i < sepalCount; i++) {
    const angle = (i / sepalCount) * Math.PI * 2 + prng() * 0.3;
    const tilt = 0.6 + prng() * 0.5;
    const height = 0.18 + prng() * 0.10;
    const radius = 0.05 + prng() * 0.03;

    const sepalGeo = new THREE.ConeGeometry(radius, height, 4);
    sepalGeo.translate(0, height / 2, 0); // base at origin
    sepalGeo.rotateZ(-tilt);              // tilt outward strongly
    sepalGeo.rotateY(angle);              // distribute around circle

    const sepal = new THREE.Mesh(sepalGeo, calyxMat);
    sepal.castShadow = true;
    calyxGroup.add(sepal);
  }

  mesh.add(calyxGroup);

  return mesh;
}
