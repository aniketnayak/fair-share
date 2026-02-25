/**
 * Compute score and grade from two volumes.
 */
export function computeScore(volumeA, volumeB) {
  return computeScoreWithTarget(volumeA, volumeB, 50);
}

/**
 * Compute score and grade for a target split ratio.
 * @param {number} targetSmallPct - The target smaller-side percentage (10, 20, 25, 30, 40, or 50)
 */
export function computeScoreWithTarget(volumeA, volumeB, targetSmallPct) {
  const total = volumeA + volumeB;
  const pctA = ((volumeA / total) * 100).toFixed(1);
  const pctB = ((volumeB / total) * 100).toFixed(1);

  if (targetSmallPct === 50) {
    // Original 50/50 formula: ratio of smaller/larger, sqrt curve
    const smaller = Math.min(volumeA, volumeB);
    const larger = Math.max(volumeA, volumeB);
    const ratio = larger > 0 ? smaller / larger : 0;
    const score = Math.round(Math.pow(ratio, 0.5) * 100);
    const grade = scoreToGrade(score);
    return { score, grade, ratio, pctA, pctB };
  }

  // Target mode: measure closeness to the target split
  const actualSmallPct = Math.min(volumeA, volumeB) / total; // 0 to 0.5
  const targetFrac = targetSmallPct / 100;                    // e.g., 0.3 for 30/70
  const error = Math.abs(actualSmallPct - targetFrac);        // 0 to ~0.5
  const rawScore = Math.max(0, 1 - error / 0.25);            // 0 at 25pp error, 1 at perfect
  const score = Math.round(Math.pow(rawScore, 0.5) * 100);   // generous sqrt curve
  const ratio = total > 0 ? Math.min(volumeA, volumeB) / Math.max(volumeA, volumeB) : 0;
  const grade = scoreToGrade(score);

  return { score, grade, ratio, pctA, pctB };
}

export function scoreToGrade(score) {
  if (score >= 99) return 'PERFECT!';
  if (score >= 95) return 'S';
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

/**
 * Compute score for N pieces (multi-slice mode).
 * Uses min/max ratio with sqrt curve, same as 2-piece.
 */
export function computeMultiSliceScore(volumes) {
  const min = Math.min(...volumes);
  const max = Math.max(...volumes);
  const ratio = max > 0 ? min / max : 0;
  const score = Math.round(Math.sqrt(ratio) * 100);
  const grade = scoreToGrade(score);

  const total = volumes.reduce((a, b) => a + b, 0);
  const pcts = volumes.map(v => ((v / total) * 100).toFixed(1));

  return { score, grade, ratio, pcts };
}
