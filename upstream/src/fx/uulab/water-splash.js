// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Water splash", "desc": "Blue droplets arc outward from a small landing splash.", "tags": ["water", "movement", "environment"], "size": [128, 128], "origin": [64, 64], "duration": 0.9, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#164e78", "#2a86b8", "#75d6e9", "#cefaff", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  p.ring(0,8,3+u*25,1,C[1],a*.7);for(let i=0;i<9;i++){let x=(i-4)*u*5,y=8-Math.sin(u*Math.PI)*(10+i%3*5)+u*5;p.circle(x,y,1.5,C[2+i%2],a);p.beam(x,y,x,y+3,1,C[2],a*.7);}
}
