// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Blood hit", "desc": "A short red directional burst for readable damage feedback.", "tags": ["impact", "combat", "damage"], "size": [128, 128], "origin": [64, 64], "duration": 0.7, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#310f1c", "#711b2b", "#bb3540", "#ed6670", "#ffd0bb"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  for(let i=0;i<11;i++){let q=-1.9+i*.19,r=3+u*(16+i%4*5),x=Math.cos(q)*r,y=Math.sin(q)*r+u*u*15;p.circle(x,y,1+i%3*.5,C[1+i%3],a); }p.glow(0,0,12,C[1],a*.35);
}
