// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Steam vent", "desc": "A soft puff of steam rises from a machine vent.", "tags": ["steam", "environment", "machine"], "size": [128, 128], "origin": [64, 64], "duration": 1.2, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#4d6872", "#8bb0bb", "#c9e4e5", "#ffffff"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<7;i++){let x=Math.sin(i*3+u*4)*5,y=10-i*3-u*30,r=2+i%3+u*5;p.circle(x,y,r,C[1+i%3],a*.45);}
}
