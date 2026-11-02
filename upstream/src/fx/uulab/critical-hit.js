// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Critical hit", "desc": "A bright starburst and sparks emphasize a decisive hit.", "tags": ["impact", "combat", "critical"], "size": [128, 128], "origin": [64, 64], "duration": 0.65, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#4a192b", "#bf4531", "#ff9e35", "#ffe57c", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  p.glow(0,0,22,C[2],a*.5); for(let i=0;i<8;i++){let q=i*TAU/8,r=3+u*18; p.beam(Math.cos(q)*r,Math.sin(q)*r,Math.cos(q)*(r+8*(1-u)),Math.sin(q)*(r+8*(1-u)),i%2?1:2,C[i%2?2:3],a);} p.circle(0,0,5*(1-u),C[4],a);
}
