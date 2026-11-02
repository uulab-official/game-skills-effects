// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Star buff", "desc": "Bright stars orbit outward on a successful buff.", "tags": ["status", "buff", "magic"], "size": [128, 128], "origin": [64, 64], "duration": 1.1, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#62437c", "#ba79c8", "#f3bfe9", "#ffffff"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<6;i++){let q=i*TAU/6+u,r=8+u*20,x=Math.cos(q)*r,y=Math.sin(q)*r;p.beam(x-3,y,x+3,y,1,C[2],a);p.beam(x,y-3,x,y+3,1,C[3],a);p.glow(x,y,5,C[1],a*.3);}
}
