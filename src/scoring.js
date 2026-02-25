/**
 * Compute score and grade from two volumes.
 */
export function computeScore(volumeA, volumeB) {
  const total = volumeA + volumeB;
  const smaller = Math.min(volumeA, volumeB);
  const larger = Math.max(volumeA, volumeB);
  const ratio = larger > 0 ? smaller / larger : 0; // 0..1

  // Generous curve: sqrt to reward near-equal cuts
  const score = Math.round(Math.pow(ratio, 0.5) * 100);

  let grade;
  if (score >= 99) grade = 'PERFECT!';
  else if (score >= 95) grade = 'S';
  else if (score >= 90) grade = 'A';
  else if (score >= 80) grade = 'B';
  else if (score >= 70) grade = 'C';
  else if (score >= 60) grade = 'D';
  else grade = 'F';

  const pctA = ((volumeA / total) * 100).toFixed(1);
  const pctB = ((volumeB / total) * 100).toFixed(1);

  return { score, grade, ratio, pctA, pctB };
}
