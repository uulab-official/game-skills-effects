// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Power arrows", "desc": "Three upward arrows signal a temporary power increase.", "tags": ["status", "ui", "buff"], "size": [128, 128], "origin": [64, 64], "duration": 1.1, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#325d96", "#468ec8", "#9de3f7", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=-1;i<=1;i++){let x=i*10,y=9-u*24;p.beam(x,y+6,x,y-5,2,C[2],a);p.beam(x,y-5,x-4,y-1,1,C[3],a);p.beam(x,y-5,x+4,y-1,1,C[3],a);}
}
