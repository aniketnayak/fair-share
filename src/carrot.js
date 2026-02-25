import * as THREE from 'three';

export function generateCarrot(prng, noise3D) {
  const geo = new THREE.IcosahedronGeometry(1.0, 6);
  geo.deleteAttribute('uv');
  const posAttr = geo.getAttribute('position');

  // Carrot body: very elongated along one axis
  const scales = [1, 1, 1];
  const elongAxis = Math.floor(prng() * 3);
  const otherAxes = [0, 1, 2].filter(a => a !== elongAxis);
  scales[elongAxis] = 2.2 + prng() * 0.4;
  for (const a of otherAxes) scales[a] = 0.35 + prng() * 0.08;

  // Extreme taper for conical shape
  const taperAxis = elongAxis;
  const taperDir = prng() < 0.5 ? 1 : -1;
  const taperStrength = 0.70 + prng() * 0.15;

  // Very subtle lumps
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
      strength: 0.03 + prng() * 0.05,
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
      strength: 0.08 + prng() * 0.12,
      falloff: 1.2 + prng() * 1.0,
    });
  }

  // Tiny root bumps
  const knobCount = 8 + Math.floor(prng() * 8);
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
      strength: 0.01 + prng() * 0.03,
      falloff: 6.0 + prng() * 6.0,
    });
  }

  const octaves = 2;
  const baseFreq = 1.2;
  const persistence = 0.4;
  const noiseStrength = 0.08;

  for (let i = 0; i < posAttr.count; i++) {
    let x = posAttr.getX(i);
    let y = posAttr.getY(i);
    let z = posAttr.getZ(i);

    x *= scales[0];
    y *= scales[1];
    z *= scales[2];

    // Taper — linear exponent (t^1.0) for conical shape
    const coords = [x, y, z];
    const axisVal = coords[taperAxis];
    const t = (axisVal * taperDir + 1) / 2;
    const taperScale = 1.0 - taperStrength * Math.max(0, t);
    for (const a of [0, 1, 2]) {
      if (a !== taperAxis) {
        coords[a] *= Math.max(0.15, taperScale);
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
    color: 0xED7D31,
    roughness: 0.65,
    metalness: 0.02,
  });

  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'carrot';

  // --- Green leaf fronds at the fat end ---
  const leafMat = new THREE.MeshStandardMaterial({
    color: 0x228B22,
    roughness: 0.55,
    metalness: 0.0,
    side: THREE.DoubleSide,
  });

  const leavesGroup = new THREE.Group();

  // Fat end: where t=0, i.e. -taperDir along elongAxis
  const fatDir = new THREE.Vector3();
  fatDir.setComponent(elongAxis, -taperDir);
  leavesGroup.position.copy(fatDir.clone().multiplyScalar(scales[elongAxis]));

  // Orient group so local +Y points outward (away from body)
  const quat = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0), fatDir
  );
  leavesGroup.quaternion.copy(quat);

  const frondCount = 5 + Math.floor(prng() * 3);
  for (let i = 0; i < frondCount; i++) {
    const angle = (i / frondCount) * Math.PI * 2 + prng() * 0.4;
    const tilt = 0.20 + prng() * 0.35;
    const height = 0.5 + prng() * 0.5;
    const radius = 0.025 + prng() * 0.02;

    const frondGeo = new THREE.ConeGeometry(radius, height, 4);
    frondGeo.translate(0, height / 2, 0); // base at origin
    frondGeo.rotateZ(-tilt);              // tilt outward
    frondGeo.rotateY(angle);              // distribute around circle

    const frond = new THREE.Mesh(frondGeo, leafMat);
    frond.castShadow = true;
    leavesGroup.add(frond);
  }

  mesh.add(leavesGroup);

  return mesh;
}
