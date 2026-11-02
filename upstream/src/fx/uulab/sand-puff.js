// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Sand puff", "desc": "A low arc of golden sand kicks up from the ground.", "tags": ["movement", "dust", "environment"], "size": [128, 128], "origin": [64, 64], "duration": 0.8, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#654a32", "#a88250", "#dfbc7d", "#fff0c7"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<9;i++){let q=i/8*Math.PI,x=Math.cos(q)*(4+u*24),y=8-Math.sin(q)*(u*12);p.circle(x,y,1.5+(i%2),C[1+i%3],a);}p.beam(-20*u,9,20*u,9,1,C[2],a*.6);
}
