// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Arcane cast", "desc": "A rotating constellation gathers before a spell is cast.", "tags": ["magic", "cast", "arcane"], "size": [128, 128], "origin": [64, 64], "duration": 1.5, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#252456", "#574e9f", "#9c88e5", "#dccbff", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  let pulse=Math.sin(Math.PI*u);p.ring(0,0,24-8*u,1,C[1],a);for(let i=0;i<6;i++){let q=i*TAU/6+u*3,r=24-8*u,x=Math.cos(q)*r,y=Math.sin(q)*r;p.circle(x,y,2,C[3],a);let n=q+TAU/3;p.line(x,y,Math.cos(n)*r,Math.sin(n)*r,C[2],a*.5);}p.glow(0,0,20,C[1],pulse*.4);p.circle(0,0,3*pulse,C[4],a);
}
