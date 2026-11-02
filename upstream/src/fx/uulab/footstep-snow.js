// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Footstep snow", "desc": "Powdered snow scatters from a quick step or dodge.", "tags": ["movement", "snow", "environment"], "size": [128, 128], "origin": [64, 64], "duration": 0.8, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#647d9b", "#a4c5d4", "#dceefa", "#ffffff", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  for(let i=0;i<11;i++){let x=(i-5)*u*4,y=8-Math.sin(u*Math.PI)*(4+(i%4)*2)+u*5;p.circle(x,y,1+i%2,C[2+i%2],a*.8);}p.ring(0,11,3+u*15,1,C[1],a*.5);
}
