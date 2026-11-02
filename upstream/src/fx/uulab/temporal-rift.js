// UULab: a time-shift feedback cue, built on the PixelFX drawing API.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Temporal rift", desc: "Concentric clock fragments fold into a bright time-shift pulse.",
  tags: ["uulab", "time", "magic", "transition", "one-shot"],
  size: [128, 128], origin: [64, 64], duration: 1.4, loop: false, fps: 30, bg: "dark",
  options: { palette: ["#102340", "#174d75", "#1b90a8", "#64e6d7", "#d4fff2", "#ffffff"], seed: 4 }
};

export function draw(p, t, o) {
  const C = fit(o.palette, 6), a = clamp(1 - t / meta.duration), open = clamp(t / .25);
  const radius = 8 + 30 * open;
  p.glow(0, 0, 35 * open, C[2], .30 * a);
  p.ring(0, 0, radius, 1.5, C[3], a);
  p.ring(0, 0, radius * .65, 1, C[4], a * .8);
  for (let i = 0; i < 12; i++) {
    const angle = i * TAU / 12 + t * (i % 2 ? -.7 : .7);
    const r = radius + 3 + 3 * Math.sin(i * 3 + t * 5);
    p.line(Math.cos(angle) * r, Math.sin(angle) * r, Math.cos(angle) * (r + 5), Math.sin(angle) * (r + 5), C[i % 3 + 2], a);
  }
  if (t < .18) p.circle(0, 0, 3 + 5 * (1 - t / .18), WHITE, a);
}
