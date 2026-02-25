import * as THREE from 'three';

const EPS = 1e-5;
const FRONT = 1;
const BACK = -1;
const COPLANAR = 0;

/**
 * Slice a mesh geometry by a THREE.Plane.
 * Returns { front: BufferGeometry, back: BufferGeometry } or null if one side is empty.
 */
export function sliceMesh(geometry, plane) {
  // Work with non-indexed geometry
  const geo = geometry.index ? geometry.toNonIndexed() : geometry.clone();

  const positions = geo.getAttribute('position');
  const triCount = positions.count / 3;

  const frontVerts = [];
  const backVerts = [];
  const capEdges = [];

  for (let t = 0; t < triCount; t++) {
    const i0 = t * 3;
    const v0 = vecFromAttr(positions, i0);
    const v1 = vecFromAttr(positions, i0 + 1);
    const v2 = vecFromAttr(positions, i0 + 2);

    const d0 = plane.distanceToPoint(v0);
    const d1 = plane.distanceToPoint(v1);
    const d2 = plane.distanceToPoint(v2);

    const s0 = classify(d0);
    const s1 = classify(d1);
    const s2 = classify(d2);

    // All on front or coplanar
    if (s0 >= 0 && s1 >= 0 && s2 >= 0) {
      pushTri(frontVerts, v0, v1, v2);
      continue;
    }
    // All on back or coplanar
    if (s0 <= 0 && s1 <= 0 && s2 <= 0) {
      pushTri(backVerts, v0, v1, v2);
      continue;
    }

    // Triangle spans the plane — clip it
    clipTriangle(
      [v0, v1, v2],
      [d0, d1, d2],
      [s0, s1, s2],
      frontVerts,
      backVerts,
      capEdges
    );
  }

  if (frontVerts.length === 0 || backVerts.length === 0) return null;

  // Build cap polygons and add them to both halves
  buildCap(capEdges, plane, frontVerts, backVerts);

  return {
    front: buildGeometry(frontVerts),
    back: buildGeometry(backVerts),
  };
}

function vecFromAttr(attr, index) {
  return new THREE.Vector3(attr.getX(index), attr.getY(index), attr.getZ(index));
}

function classify(dist) {
  if (dist > EPS) return FRONT;
  if (dist < -EPS) return BACK;
  return COPLANAR;
}

function intersectEdge(a, b, da, db) {
  const t = da / (da - db);
  return new THREE.Vector3().lerpVectors(a, b, t);
}

function pushTri(arr, a, b, c) {
  arr.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
}

function clipTriangle(verts, dists, sides, frontVerts, backVerts, capEdges) {
  const frontPts = [];
  const backPts = [];
  const intersections = [];

  for (let i = 0; i < 3; i++) {
    const j = (i + 1) % 3;
    const si = sides[i];
    const sj = sides[j];

    if (si >= 0) frontPts.push(verts[i]);
    if (si <= 0) backPts.push(verts[i]);

    if ((si === FRONT && sj === BACK) || (si === BACK && sj === FRONT)) {
      const pt = intersectEdge(verts[i], verts[j], dists[i], dists[j]);
      frontPts.push(pt);
      backPts.push(pt.clone());
      intersections.push(pt);
    }
  }

  if (intersections.length === 2) {
    capEdges.push([intersections[0], intersections[1]]);
  }

  fanTriangulate(frontPts, frontVerts);
  fanTriangulate(backPts, backVerts);
}

function fanTriangulate(pts, outArr) {
  for (let i = 1; i < pts.length - 1; i++) {
    pushTri(outArr, pts[0], pts[i], pts[i + 1]);
  }
}

// ── Cap construction ──────────────────────────────────────────────────────

/**
 * Build solid caps from the collection of intersection edges.
 * Uses a robust spatial hash with tolerance-based vertex merging
 * to chain edges into closed polygons, then triangulates them.
 */
function buildCap(capEdges, plane, frontVerts, backVerts) {
  if (capEdges.length === 0) return;

  // 1) Merge vertices within tolerance to get clean indices
  const { uniqueVerts, indexedEdges } = mergeVertices(capEdges);

  if (indexedEdges.length === 0) return;

  // 2) Build adjacency list from indexed edges
  const adj = new Map();
  for (const [a, b] of indexedEdges) {
    if (a === b) continue;
    if (!adj.has(a)) adj.set(a, []);
    if (!adj.has(b)) adj.set(b, []);
    adj.get(a).push(b);
    adj.get(b).push(a);
  }

  // 3) Chain into closed polygons
  const visited = new Set();
  const polygons = [];

  for (const [startIdx] of adj) {
    if (visited.has(startIdx)) continue;

    const polygon = [];
    let current = startIdx;
    let prev = -1;
    let safety = 0;

    while (safety++ < 50000) {
      if (visited.has(current) && polygon.length > 2) {
        // Closed the loop
        break;
      }
      visited.add(current);
      polygon.push(current);

      const neighbors = adj.get(current);
      if (!neighbors || neighbors.length === 0) break;

      // Pick next unvisited neighbor, preferring not to go back
      let next = -1;
      for (const n of neighbors) {
        if (n !== prev && !visited.has(n)) {
          next = n;
          break;
        }
      }
      // If all visited, try to close loop back to start
      if (next === -1) {
        for (const n of neighbors) {
          if (n === polygon[0] && polygon.length > 2) {
            next = n;
            break;
          }
        }
      }
      if (next === -1) break;

      prev = current;
      current = next;
    }

    if (polygon.length >= 3) {
      polygons.push(polygon.map(i => uniqueVerts[i]));
    }
  }

  // 4) Triangulate each polygon and add to both halves
  const normal = plane.normal.clone().normalize();

  for (const polygon of polygons) {
    const tris = triangulatePlanarPolygon(polygon, normal);
    for (const [a, b, c] of tris) {
      // Front cap: normal aligned with cut plane normal
      pushTri(frontVerts, a, b, c);
      // Back cap: reversed winding
      pushTri(backVerts, c, b, a);
    }
  }
}

/**
 * Merge cap edge vertices within a tolerance so that shared endpoints
 * get the same index, enabling reliable edge chaining.
 */
function mergeVertices(capEdges) {
  const MERGE_TOL = 1e-4;
  const uniqueVerts = [];
  const indexedEdges = [];

  function findOrAdd(v) {
    for (let i = 0; i < uniqueVerts.length; i++) {
      if (uniqueVerts[i].distanceTo(v) < MERGE_TOL) return i;
    }
    uniqueVerts.push(v.clone());
    return uniqueVerts.length - 1;
  }

  for (const [a, b] of capEdges) {
    const ia = findOrAdd(a);
    const ib = findOrAdd(b);
    if (ia !== ib) {
      indexedEdges.push([ia, ib]);
    }
  }

  return { uniqueVerts, indexedEdges };
}

/**
 * Triangulate a planar polygon given its 3D points and a known normal.
 * Projects to 2D, uses ear-clipping via ShapeUtils, returns 3D triangles.
 */
function triangulatePlanarPolygon(polygon, normal) {
  if (polygon.length < 3) return [];
  if (polygon.length === 3) return [[polygon[0], polygon[1], polygon[2]]];

  // Build 2D coordinate system on the plane
  let up = new THREE.Vector3(0, 1, 0);
  if (Math.abs(normal.dot(up)) > 0.9) up = new THREE.Vector3(1, 0, 0);
  const u = new THREE.Vector3().crossVectors(normal, up).normalize();
  const v = new THREE.Vector3().crossVectors(u, normal).normalize();

  const origin = polygon[0];
  const pts2D = polygon.map(p => {
    const rel = p.clone().sub(origin);
    return new THREE.Vector2(rel.dot(u), rel.dot(v));
  });

  // Ensure winding is CCW for ShapeUtils
  const area = signedArea2D(pts2D);
  if (area < 0) {
    pts2D.reverse();
    polygon = [...polygon].reverse();
  }

  const indices = THREE.ShapeUtils.triangulateShape(pts2D, []);
  return indices.map(([a, b, c]) => [polygon[a], polygon[b], polygon[c]]);
}

function signedArea2D(pts) {
  let area = 0;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    area += (pts[j].x - pts[i].x) * (pts[j].y + pts[i].y);
  }
  return area * 0.5;
}

function buildGeometry(vertArray) {
  const geo = new THREE.BufferGeometry();
  const arr = new Float32Array(vertArray);
  geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
  geo.computeVertexNormals();
  return geo;
}
