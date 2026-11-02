// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Shield break", "desc": "Cyan fragments burst away as an energy shield fails.", "tags": ["shield", "defense", "impact"], "size": [128, 128], "origin": [64, 64], "duration": 1, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#163b54", "#247b8d", "#56ced2", "#b5ffef", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  p.ring(0,0,24+u*6,1,C[1],a*.5);for(let i=0;i<8;i++){let q=i*TAU/8,r=18+u*20,x=Math.cos(q)*r,y=Math.sin(q)*r;p.beam(x,y,x+Math.cos(q+.5)*6,y+Math.sin(q+.5)*6,2,C[2+i%2],a);}p.glow(0,0,25,C[1],a*.25);
}
