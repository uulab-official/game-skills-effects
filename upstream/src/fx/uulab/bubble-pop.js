// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Bubble pop", "desc": "A tiny bubble bursts into bright droplets.", "tags": ["water", "impact", "environment"], "size": [128, 128], "origin": [64, 64], "duration": 0.8, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#1f5b8e", "#5ab6dc", "#b9f6ff", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  p.ring(0,0,8+u*6,1,C[2],a);for(let i=0;i<7;i++){let q=i*TAU/7,r=10+u*18;p.circle(Math.cos(q)*r,Math.sin(q)*r+u*5,1.2,C[2+i%2],a);}
}
