// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Shadow vanish", "desc": "Violet smoke coils inward as a creature disappears.", "tags": ["shadow", "stealth", "transition"], "size": [128, 128], "origin": [64, 64], "duration": 1.1, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#241733", "#49325f", "#8362a6", "#c8a2d4", "#f9e6ff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  for(let i=0;i<12;i++){let q=i*TAU/12+u*3,r=8+(1-u)*20,x=Math.cos(q)*r,y=Math.sin(q)*r-u*10;p.circle(x,y,2+(i%3),C[1+i%3],a*.7);p.glow(x,y,7,C[1],a*.2);}p.ring(0,0,20*(1-u),1,C[2],a);
}
