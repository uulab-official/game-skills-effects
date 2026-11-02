// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Electric chain", "desc": "Jagged arcs flicker around a charged impact.", "tags": ["lightning", "magic", "combat"], "size": [128, 128], "origin": [64, 64], "duration": 0.7, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#234a8c", "#497de3", "#96c7ff", "#e5f5ff", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  for(let k=0;k<5;k++){let q=k*TAU/5+u*.5,x=0,y=0;for(let j=1;j<=4;j++){let r=j*(5+u*3),off=Math.sin(k*9+j*4+Math.floor(u*8))*3,nx=Math.cos(q)*r-Math.sin(q)*off,ny=Math.sin(q)*r+Math.cos(q)*off;p.beam(x,y,nx,ny,1,C[2+(j%2)],a);x=nx;y=ny;}}p.glow(0,0,22,C[1],a*.4);
}
