// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Enemy alert", "desc": "A pulsing warning mark signals an enemy noticing the player.", "tags": ["enemy", "alert", "ui"], "size": [128, 128], "origin": [64, 64], "duration": 1.5, "loop": true, "fps": 30, "bg": "dark", "options": {"palette": ["#4b2025", "#b33836", "#fa6647", "#ffe1a1", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  let pulse=.75+.25*Math.sin(TAU*u);p.ring(0,0,19+2*Math.sin(TAU*u),1,C[1],pulse*.6);p.beam(0,-12,0,3,3,C[2],pulse);p.circle(0,10,2,C[3],pulse);p.glow(0,0,24,C[1],pulse*.2);
}
