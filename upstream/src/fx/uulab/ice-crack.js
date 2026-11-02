// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Ice crack", "desc": "Angular cracks radiate from a frozen impact point.", "tags": ["ice", "impact", "combat"], "size": [128, 128], "origin": [64, 64], "duration": 0.8, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#27567c", "#66b4d4", "#c8f8ff", "#ffffff"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<7;i++){let q=i*TAU/7,r=8+u*26,x=Math.cos(q)*r,y=Math.sin(q)*r;p.beam(0,0,x,y,1,C[2],a);p.beam(x,y,x+Math.cos(q+.8)*7,y+Math.sin(q+.8)*7,1,C[3],a);}
}
