// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Lava bubble", "desc": "A molten bubble swells and bursts with hot droplets.", "tags": ["fire", "lava", "environment"], "size": [128, 128], "origin": [64, 64], "duration": 0.9, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#601d21", "#c94b24", "#ffae32", "#fff1a0"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  let r=5+u*16;p.ring(0,8,r,2,C[1],a);for(let i=0;i<8;i++){let q=i*TAU/8,x=Math.cos(q)*r,y=8+Math.sin(q)*r-u*12;p.circle(x,y,2,C[2+i%2],a);}
}
