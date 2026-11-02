// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Parry flash", "desc": "A crisp radial flash confirms a precisely timed parry.", "tags": ["parry", "combat", "impact"], "size": [128, 128], "origin": [64, 64], "duration": 0.55, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#705024", "#d2a343", "#ffe5a1", "#ffffff"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  p.ring(0,0,5+u*22,2,C[2],a);for(let i=0;i<8;i++){let q=i*TAU/8,r=8+u*20;p.beam(Math.cos(q)*r,Math.sin(q)*r,Math.cos(q)*(r+8),Math.sin(q)*(r+8),1,C[3],a);}
}
