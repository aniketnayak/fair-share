# Fair Share

A 3D potato-slicing game built with Three.js. Players split a procedurally generated potato by positioning a cutting plane, and the game scores how fair the split is. Includes 1v1 versus mode via Pusher Channels.

## Commands

- `npm run dev` — Start Vite dev server (also serves `/api/pusher-auth` locally via vite plugin)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build
- Deploy: Push to GitHub, import in Vercel, set env vars

## Architecture

```
index.html          → DOM structure (canvas, overlays, HUD)
src/main.js         → Game state machine & orchestration (entry point)
src/ui.js           → DOM show/hide/event binding (~50 exported functions)
src/style.css       → All styling (home, HUD, versus overlays)
src/potato.js       → Procedural potato generation (seeded PRNG + simplex noise)
src/cuttingPlane.js → Visual plane + getWorldPlane()
src/slicer.js       → Mesh slicing along arbitrary plane
src/volume.js       → Signed tetrahedra volume computation
src/scoring.js      → Volume ratio → score (0-100) + letter grade
src/animation.js    → Post-cut cinematic (camera swoop, split, scales, tilt)
src/scales.js       → 3D balance scale model + tilt math
src/controls.js     → OrbitControls + TransformControls (R=rotate, T=translate)
src/scene.js        → Three.js scene, lighting, environment (table, trees, sky)
src/timer.js        → RAF-based countdown (default 10s)
src/network.js      → Pusher client: rooms, presence channels, client events
src/versus.js       → 3-round match state machine, score sync, rematch
api/pusher-auth.js  → Vercel serverless function for Pusher presence auth
```

## Game State Machine

```
MENU (-1) → PLAYING (0) → CUTTING (1) → SCORED (2) → MENU
```

- `startRound(seed)` — Creates potato + plane, starts timer. Optional seed for versus determinism.
- `performCut()` — Slices mesh, runs cinematic animation, computes score. In versus mode, sends score to opponent instead of showing solo panel.
- `goToMenu()` — Cleans up all 3D objects, resets state.

## Versus Mode Flow

```
Menu → Lobby → Create/Join Room → Waiting → [opponent joins]
  → Round 1 (both cut independently, same seeded potato)
  → Round Result (5s auto-advance) → Round 2 → ... → Round 3
  → Match Result (win/lose/tie + rematch option)
```

- Host generates seeds, sends via `client-seed` event
- Both players cut and send scores via `client-score`
- Rounds auto-advance after 5 seconds (no button needed)
- Tie only on exact equal average scores
- `matchOver` flag suppresses false disconnect on clean exit

## Key Design Decisions

- **Deterministic potatoes**: Same seed → same shape. `mulberry32` PRNG seeded from shared seed ensures both versus players see identical potatoes.
- **No server game logic**: All slicing, volume, scoring runs client-side. Pusher only relays events. This means scores are honor-system in versus.
- **Potato offset from plane**: Cutting plane stays at scene center, potato spawns offset + rotated. Forces players to use both translate and rotate.
- **Potato shape variety**: 5 body types (long/stubby/flat/oval/lopsided) + asymmetric bulges shift center of mass.

## Environment Variables

```
VITE_PUSHER_KEY=...      # Public, reaches browser (VITE_ prefix)
VITE_PUSHER_CLUSTER=...  # Public, reaches browser
PUSHER_APP_ID=...        # Server-side only (api/pusher-auth.js)
PUSHER_SECRET=...        # Server-side only, NEVER in browser
```

Set all 4 in `.env` (local dev) and Vercel Environment Variables (production). `.env` is gitignored.

## Key Constants

| Constant | Value | Location |
|----------|-------|----------|
| Timer duration | 10s | `src/timer.js` |
| Total rounds | 3 | `src/versus.js` |
| Round result delay | 5s | `src/versus.js` |
| Opponent timeout | 90s | `src/versus.js` |
| Potato scale | 0.25 | `src/potato.js` |
| Score curve | `√(ratio) × 100` | `src/scoring.js` |
| Room code chars | `ABCDEFGHJKLMNPQRSTUVWXYZ` | `src/network.js` |

## Scoring

- `ratio = min(vol_a, vol_b) / max(vol_a, vol_b)`
- `score = round(√ratio × 100)` — generous sqrt curve
- Grades: PERFECT! (99+), S (95-98), A (90-94), B (80-89), C (70-79), D (60-69), F (<60)

## Style Conventions

- No build framework beyond Vite — vanilla JS modules
- Three.js for all 3D rendering
- CSS uses `position: fixed` overlays with `.hidden` class toggling
- UI functions exported individually (not a class) — `showX()`, `hideX()`, `onX(callback)`
- All versus overlays use `.overlay-panel` base class
