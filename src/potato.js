import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';

// Simple seeded PRNG (mulberry32)
export function mulberry32(seed) {
  let s = seed | 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function generatePotato(seed = Math.random()) {
  const prng = mulberry32(seed * 2147483647);
  const noise3D = createNoise3D(prng);

  const geo = new THREE.IcosahedronGeometry(1.0, 6);
  geo.deleteAttribute('uv');
  const posAttr = geo.getAttribute('position');

  // Shape variety — pick a body type then add randomness
  const shapeRoll = prng();
  const scales = [1, 1, 1];
  const elongAxis = Math.floor(prng() * 3);
  const otherAxes = [0, 1, 2].filter(a => a !== elongAxis);

  if (shapeRoll < 0.25) {
    // Long & skinny (fingerling-like)
    scales[elongAxis] = 1.7 + prng() * 0.5;
    for (const a of otherAxes) scales[a] = 0.45 + prng() * 0.15;
  } else if (shapeRoll < 0.45) {
    // Round & stubby
    scales[elongAxis] = 0.85 + prng() * 0.2;
    for (const a of otherAxes) scales[a] = 0.8 + prng() * 0.25;
  } else if (shapeRoll < 0.65) {
    // Flat / disc-shaped (one axis squished)
    scales[elongAxis] = 1.2 + prng() * 0.3;
    scales[otherAxes[0]] = 1.0 + prng() * 0.3;
    scales[otherAxes[1]] = 0.45 + prng() * 0.15;
  } else if (shapeRoll < 0.82) {
    // Classic oval
    scales[elongAxis] = 1.3 + prng() * 0.4;
    for (const a of otherAxes) scales[a] = 0.65 + prng() * 0.2;
  } else {
    // Chunky & lopsided (two axes similar, one slightly longer)
    scales[elongAxis] = 1.1 + prng() * 0.3;
    scales[otherAxes[0]] = 0.7 + prng() * 0.3;
    scales[otherAxes[1]] = 0.9 + prng() * 0.2;
  }

  // Broad body lumps — gentle rolling bumps that shape the overall form
  const lumpCount = 5 + Math.floor(prng() * 3);
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
      strength: 0.10 + prng() * 0.18,
      falloff: 2.0 + prng() * 2.0,
    });
  }

  // Asymmetric bulges — one-sided bumps that shift the center of mass
  const bulgeCount = 1 + Math.floor(prng() * 2);
  const bulges = [];
  for (let i = 0; i < bulgeCount; i++) {
    const theta = prng() * Math.PI * 2;
    const phi = Math.acos(2 * prng() - 1);
    bulges.push({
      dir: new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      ),
      strength: 0.15 + prng() * 0.20,
      falloff: 1.5 + prng() * 1.5,
    });
  }

  // Small "eye" knobs — those tight little potato bumps
  const knobCount = 6 + Math.floor(prng() * 6);
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
      strength: 0.04 + prng() * 0.06,
      falloff: 6.0 + prng() * 6.0,
    });
  }

  // fBm simplex noise — very low frequency for smooth organic waviness
  const octaves = 2;
  const baseFreq = 0.8;
  const persistence = 0.4;
  const strength = 0.20;

  for (let i = 0; i < posAttr.count; i++) {
    let x = posAttr.getX(i);
    let y = posAttr.getY(i);
    let z = posAttr.getZ(i);

    x *= scales[0];
    y *= scales[1];
    z *= scales[2];

    const len = Math.sqrt(x * x + y * y + z * z);
    const nx = x / len;
    const ny = y / len;
    const nz = z / len;

    // Broad body lumps
    let lumpDisp = 0;
    for (const lump of lumps) {
      const dot = nx * lump.dir.x + ny * lump.dir.y + nz * lump.dir.z;
      const influence = Math.max(0, dot);
      lumpDisp += lump.strength * Math.pow(influence, lump.falloff);
    }

    // Small knobby bumps (potato eyes)
    let knobDisp = 0;
    for (const knob of knobs) {
      const dot = nx * knob.dir.x + ny * knob.dir.y + nz * knob.dir.z;
      const influence = Math.max(0, dot);
      knobDisp += knob.strength * Math.pow(influence, knob.falloff);
    }

    // Asymmetric bulges — push one side out more
    let bulgeDisp = 0;
    for (const bulge of bulges) {
      const dot = nx * bulge.dir.x + ny * bulge.dir.y + nz * bulge.dir.z;
      const influence = Math.max(0, dot);
      bulgeDisp += bulge.strength * Math.pow(influence, bulge.falloff);
    }

    // fBm noise
    let amp = 1;
    let freq = baseFreq;
    let noiseVal = 0;
    let maxAmp = 0;
    for (let o = 0; o < octaves; o++) {
      noiseVal += amp * noise3D(x * freq, y * freq, z * freq);
      maxAmp += amp;
      amp *= persistence;
      freq *= 2;
    }
    noiseVal /= maxAmp;

    const disp = lumpDisp + knobDisp + bulgeDisp + noiseVal * strength;
    x += nx * disp;
    y += ny * disp;
    z += nz * disp;

    posAttr.setXYZ(i, x, y, z);
  }

  geo.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    color: 0xc4935a,
    roughness: 0.75,
    metalness: 0.02,
  });

  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'potato';
  mesh.scale.setScalar(0.25);
  return mesh;
}
