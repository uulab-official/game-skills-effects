// UULab: small, warm collection effect for a forest adventure.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Wisp collect", desc: "A warm wisp folds into a ring and releases a few rising firefly sparks.",
  tags: ["uulab", "pickup", "forest", "magic", "one-shot"],
  size: [112, 112], origin: [56, 56], duration: 1.1, loop: false, fps: 30, bg: "dark",
  options: { palette: ["#214349", "#338076", "#7ac5a0", "#ffe29a", "#fff7d9", "#ffffff"], seed: 3 }
};

export function draw(p, t, o) {
  const C = fit(o.palette, 6), u = clamp(t / meta.duration), a = 1 - u;
  p.glow(0, -4, 18 + u * 14, C[3], .45 * a);
  p.ring(0, -4, 3 + 24 * Math.min(1, u * 3), 1, C[3], a);
  for (let i = 0; i < 10; i++) {
    const angle = i * TAU / 10 + u * 1.5, r = 3 + u * (12 + (i % 3) * 7);
    const x = Math.cos(angle) * r, y = -4 + Math.sin(angle) * r - u * 14;
    p.dot(x, y, i % 3 ? C[3] : WHITE, a);
    p.glow(x, y, 3, C[2], a * .18);
  }
}
