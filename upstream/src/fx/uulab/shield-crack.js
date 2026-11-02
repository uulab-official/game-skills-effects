// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Shield crack", "desc": "A blue shield outline splinters when protection fails.", "tags": ["shield", "sci-fi", "defense"], "size": [128, 128], "origin": [64, 64], "duration": 0.8, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#173b70", "#3878b5", "#91d6f5", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  p.ring(0,0,15+u*5,1,C[2],a);for(let i=0;i<6;i++){let q=i*TAU/6,r=15+u*10,x=Math.cos(q)*r,y=Math.sin(q)*r;p.beam(x,y,x+Math.cos(q)*6,y+Math.sin(q)*6,1,C[3],a);}
}
