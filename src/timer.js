/**
 * 30-second countdown timer using requestAnimationFrame.
 */
export class Timer {
  constructor({ onTick, onExpire, duration = 30 }) {
    this.duration = duration;
    this.remaining = duration;
    this.running = false;
    this.onTick = onTick;
    this.onExpire = onExpire;
    this._rafId = null;
    this._lastTime = 0;
  }

  start() {
    this.remaining = this.duration;
    this.running = true;
    this._lastTime = performance.now();
    this._tick();
  }

  stop() {
    this.running = false;
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  }

  reset() {
    this.stop();
    this.remaining = this.duration;
    if (this.onTick) this.onTick(this.remaining);
  }

  _tick() {
    if (!this.running) return;

    const now = performance.now();
    const dt = (now - this._lastTime) / 1000;
    this._lastTime = now;

    this.remaining = Math.max(0, this.remaining - dt);

    if (this.onTick) this.onTick(this.remaining);

    if (this.remaining <= 0) {
      this.running = false;
      if (this.onExpire) this.onExpire();
      return;
    }

    this._rafId = requestAnimationFrame(() => this._tick());
  }
}
