import { createNoise3D } from 'simplex-noise';
import { mulberry32 } from './potato.js';
import { generatePotatoFromPrng } from './potato.js';
import { generateCarrot } from './carrot.js';
import { generateEggplant } from './eggplant.js';

export const FOOD_TYPES = ['potato', 'carrot', 'eggplant'];

const generators = {
  potato: generatePotatoFromPrng,
  carrot: generateCarrot,
  eggplant: generateEggplant,
};

export function generateFood(seed = Math.random()) {
  const prng = mulberry32(seed * 2147483647);

  // First prng() call selects food type — deterministic from seed
  const foodType = FOOD_TYPES[Math.floor(prng() * FOOD_TYPES.length)];

  const noise3D = createNoise3D(prng);
  const mesh = generators[foodType](prng, noise3D);

  mesh.name = foodType;
  mesh.scale.setScalar(0.25);
  return mesh;
}
