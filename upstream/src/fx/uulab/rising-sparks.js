// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Rising sparks", "desc": "Hot sparks drift upward from an active forge.", "tags": ["fire", "crafting", "environment"], "size": [128, 128], "origin": [64, 64], "duration": 1.4, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#5b2a28", "#bb4e23", "#ffad42", "#fff3b4"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<11;i++){let x=(i-5)*4+Math.sin(u*4+i)*3,y=15-u*(18+(i%4)*7);p.beam(x,y,x+1,y+3+i%3,1,C[2+i%2],a);}
}
