// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Poison bubbles", "desc": "Toxic bubbles rise and pop above a poisoned target.", "tags": ["poison", "status", "magic"], "size": [128, 128], "origin": [64, 64], "duration": 2.4, "loop": true, "fps": 30, "bg": "dark", "options": {"palette": ["#113a28", "#397742", "#8cc43d", "#c9f477", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  for(let i=0;i<8;i++){let v=(u+i/8)%1,x=Math.sin(i*4+v*6)*10,y=17-v*36,k=Math.sin(Math.PI*v); p.ring(x,y,2+i%3,1,C[2],k*.8);p.dot(x-1,y-1,C[3],k);p.glow(x,y,5,C[1],k*.2);}
}
