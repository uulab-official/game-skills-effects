// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Firefly burst", "desc": "Warm luminous motes scatter in a brief forest shimmer.", "tags": ["nature", "ambient", "forest"], "size": [128, 128], "origin": [64, 64], "duration": 1.4, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#514526", "#b28b3f", "#ffe092", "#fffbed"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<9;i++){let q=i*TAU/9+u*.4,r=5+u*(10+i%4*4),x=Math.cos(q)*r,y=Math.sin(q)*r-u*8;p.circle(x,y,1,C[3],a);p.glow(x,y,4,C[2],a*.25);}
}
