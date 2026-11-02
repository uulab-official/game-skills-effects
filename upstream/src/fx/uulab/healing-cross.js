// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Healing cross", "desc": "A bright cross rises on a gentle recovery pulse.", "tags": ["heal", "support", "holy"], "size": [128, 128], "origin": [64, 64], "duration": 1.1, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#1e654c", "#4cb781", "#a2edbe", "#f4ffdc"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  let y=8-u*23;p.beam(-7,y,7,y,2,C[3],a);p.beam(0,y-7,0,y+7,2,C[3],a);p.ring(0,y,4+u*14,1,C[2],a*.7);for(let i=0;i<4;i++){let q=i*TAU/4+u;p.circle(Math.cos(q)*17,y+Math.sin(q)*12,1,C[2],a);}
}
