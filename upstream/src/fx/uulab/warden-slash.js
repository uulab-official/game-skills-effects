// UULab: directional slash; this is an effect only, not a character animation.
import { fit, clamp, WHITE } from "../../core/index.js";

export const meta = {
  name: "Warden slash", desc: "A directional crescent with a sharp contact glint and fading embers.",
  tags: ["uulab", "melee", "slash", "action", "one-shot"],
  size: [144, 128], origin: [40, 78], duration: .65, loop: false, fps: 30, bg: "dark",
  options: { palette: ["#361326", "#7d2930", "#d95d35", "#ffb157", "#fff1ba", "#ffffff"], seed: 8 }
};

export function draw(p, t, o) {
  const C = fit(o.palette, 6), u = clamp(t / meta.duration), fade = (1 - u) * (1 - u);
  const angle = -1.05 + u * 2.1, cx = 12, cy = -20;
  for (let i = 0; i < 36; i++) {
    const q = i / 35, a = angle - q * 1.25, r = 38 + q * 3;
    const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
    const width = Math.max(.7, 4.5 * Math.sin(Math.PI * q) * (1 - u * .65));
    p.circle(x, y, width, q < .2 ? WHITE : C[q < .65 ? 4 : 2], fade * (1 - q * .5));
    if (i % 3 === 0) p.glow(x, y, 6, C[3], fade * .25);
  }
  for (let i = 0; i < 8; i++) {
    const a = i * 2.4 + .5, r = 10 + u * (34 + i * 3);
    p.dot(42 + Math.cos(a) * r, -18 + Math.sin(a) * r + u * u * 20, C[i % 3 + 2], fade);
  }
}
